import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET /api/admin/tasks - 获取所有任务
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const marketId = searchParams.get('marketId');
    const executionMode = searchParams.get('executionMode');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where: any = {};
    if (status) where.status = status;
    if (marketId) where.marketId = marketId;
    if (executionMode) where.executionMode = executionMode;

    const [tasks, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          market: true,
          taskIndicators: {
            include: {
              indicator: true,
            },
          },
          _count: {
            select: { executions: true },
          },
        },
      }),
      prisma.task.count({ where }),
    ]);

    return NextResponse.json({
      tasks,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

// POST /api/admin/tasks - 创建任务
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      description,
      marketId,
      indicatorIds, // 数组
      timeframe,
      range,
      executionMode,
      cronExpression,
      scheduleInterval,
      enableNotification,
      notificationChannels,
    } = body;

    if (!name || !marketId || !indicatorIds || indicatorIds.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 验证标的存在
    const market = await prisma.market.findUnique({
      where: { id: marketId },
    });

    if (!market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 });
    }

    // 验证指标存在
    const indicators = await prisma.indicator.findMany({
      where: { id: { in: indicatorIds } },
    });

    if (indicators.length !== indicatorIds.length) {
      return NextResponse.json(
        { error: 'One or more indicators not found' },
        { status: 404 }
      );
    }

    // 创建任务和关联
    const task = await prisma.task.create({
      data: {
        name,
        description,
        marketId,
        timeframe: timeframe || 'M5',
        range: range || 500,
        executionMode: executionMode || 'REALTIME',
        cronExpression,
        scheduleInterval,
        enableNotification: enableNotification ?? true,
        notificationChannels,
        createdBy: session.user.id,
        taskIndicators: {
          create: indicatorIds.map((id: string, index: number) => ({
            indicatorId: id,
            priority: index,
          })),
        },
      },
      include: {
        market: true,
        taskIndicators: {
          include: {
            indicator: true,
          },
        },
      },
    });

    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'CREATE_TASK',
        detail: `Created task: ${name} for ${market.name}`,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error('Failed to create task:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
