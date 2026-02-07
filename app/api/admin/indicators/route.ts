import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

// GET /api/admin/indicators - 获取所有指标
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get('isActive');
    const isPublic = searchParams.get('isPublic');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where: any = {};
    if (isActive !== null) where.isActive = isActive === 'true';
    if (isPublic !== null) where.isPublic = isPublic === 'true';

    const [indicators, total] = await Promise.all([
      prisma.indicator.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { taskIndicators: true },
          },
        },
      }),
      prisma.indicator.count({ where }),
    ]);

    return NextResponse.json({
      indicators,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Failed to fetch indicators:', error);
    return NextResponse.json(
      { error: 'Failed to fetch indicators' },
      { status: 500 }
    );
  }
}

// POST /api/admin/indicators - 创建指标
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      tradingViewId,
      description,
      author,
      version,
      parameters,
      outputFields,
      documentation,
      isPublic,
    } = body;

    if (!name || !tradingViewId || !outputFields) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const existing = await prisma.indicator.findUnique({
      where: { tradingViewId },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Indicator with this TradingView ID already exists' },
        { status: 409 }
      );
    }

    const indicator = await prisma.indicator.create({
      data: {
        name,
        tradingViewId,
        description,
        author,
        version,
        parameters,
        outputFields,
        documentation,
        isPublic: isPublic || false,
      },
    });

    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'CREATE_INDICATOR',
        detail: `Created indicator: ${name}`,
      },
    });

    return NextResponse.json(indicator, { status: 201 });
  } catch (error) {
    console.error('Failed to create indicator:', error);
    return NextResponse.json(
      { error: 'Failed to create indicator' },
      { status: 500 }
    );
  }
}
