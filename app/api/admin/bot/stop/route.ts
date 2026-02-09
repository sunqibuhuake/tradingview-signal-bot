import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { botManager } from '@/lib/bot/BotManager';
import prisma from '@/lib/prisma';

// POST /api/admin/bot/stop - 停止 Bot 服务
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await botManager.stop();

    // 记录日志
    await prisma.commonLog.create({
      data: {
        action: 'BOT_STOP',
        detail: `管理员 ${session.user.name} 停止了 Bot 服务`,
        userId: session.user.id,
      },
    });

    return NextResponse.json({ message: 'Bot 服务停止成功' });
  } catch (error: any) {
    console.error('停止 Bot 服务失败:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
