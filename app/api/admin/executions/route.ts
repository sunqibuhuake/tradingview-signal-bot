import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET /api/admin/executions - 获取任务执行结果
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('taskId');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const where: any = {};
    if (taskId) where.taskId = taskId;
    if (status) where.status = status;
    if (startDate || endDate) {
      where.executedAt = {};
      if (startDate) where.executedAt.gte = new Date(startDate);
      if (endDate) where.executedAt.lte = new Date(endDate);
    }

    const [executions, total, stats] = await Promise.all([
      prisma.taskExecution.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { executedAt: 'desc' },
        include: {
          task: {
            include: {
              market: true,
            },
          },
          _count: {
            select: {
              indicatorResults: true,
            },
          },
        },
      }),
      prisma.taskExecution.count({ where }),
      // 统计数据
      prisma.taskExecution.aggregate({
        where,
        _count: {
          _all: true,
        },
        _avg: {
          duration: true,
        },
      }),
    ]);

    // 计算各状态数量
    const statusCounts = await prisma.taskExecution.groupBy({
      by: ['status'],
      where,
      _count: {
        _all: true,
      },
    });

    const successCount = statusCounts.find(s => s.status === 'SUCCESS')?._count._all || 0;
    const failedCount = statusCounts.find(s => s.status === 'FAILED')?._count._all || 0;

    return NextResponse.json({
      executions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      stats: {
        successCount,
        failedCount,
        avgDuration: stats._avg.duration || 0,
      },
    });
  } catch (error) {
    console.error('Failed to fetch executions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch executions' },
      { status: 500 }
    );
  }
}
