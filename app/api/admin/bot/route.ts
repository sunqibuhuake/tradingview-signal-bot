import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { botManager } from '@/lib/bot/BotManager';
import prisma from '@/lib/prisma';

// GET /api/admin/bot - 获取 Bot 状态
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const status = botManager.getStatus();
    
    // 获取统计信息
    const stats = await prisma.task.groupBy({
      by: ['status'],
      _count: true,
    });

    const totalTasks = await prisma.task.count();
    const activeTasks = stats.find(s => s.status === 'ACTIVE')?._count || 0;
    const pausedTasks = stats.find(s => s.status === 'PAUSED')?._count || 0;
    const errorTasks = stats.find(s => s.status === 'ERROR')?._count || 0;

    return NextResponse.json({
      ...status,
      stats: {
        totalTasks,
        activeTasks,
        pausedTasks,
        errorTasks,
      },
    });
  } catch (error: any) {
    console.error('获取 Bot 状态失败:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
