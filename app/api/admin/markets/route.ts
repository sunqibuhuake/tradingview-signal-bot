import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET /api/admin/markets - 获取所有标的
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const isActive = searchParams.get('isActive');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where: any = {};
    if (type) where.type = type;
    if (isActive !== null) where.isActive = isActive === 'true';

    const [markets, total] = await Promise.all([
      prisma.market.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { tasks: true },
          },
        },
      }),
      prisma.market.count({ where }),
    ]);

    return NextResponse.json({
      markets,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Failed to fetch markets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch markets' },
      { status: 500 }
    );
  }
}

// POST /api/admin/markets - 创建标的
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, code, symbol, type, icon, description, exchange, metadata } = body;

    // 验证必填字段
    if (!name || !code || !symbol || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 检查是否已存在
    const existing = await prisma.market.findUnique({
      where: { symbol },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Market with this symbol already exists' },
        { status: 409 }
      );
    }

    const market = await prisma.market.create({
      data: {
        name,
        code,
        symbol,
        type,
        icon,
        description,
        exchange,
        metadata,
      },
    });

    // 记录日志
    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'CREATE_MARKET',
        detail: `Created market: ${name} (${symbol})`,
      },
    });

    return NextResponse.json(market, { status: 201 });
  } catch (error) {
    console.error('Failed to create market:', error);
    return NextResponse.json(
      { error: 'Failed to create market' },
      { status: 500 }
    );
  }
}
