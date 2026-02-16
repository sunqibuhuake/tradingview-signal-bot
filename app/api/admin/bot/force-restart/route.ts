import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { botManager } from '@/lib/bot/BotManager';
import prisma from '@/lib/prisma';

// POST /api/admin/bot/force-restart - 强制重启 Bot 服务（忽略当前状态）
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('🔄 执行强制重启...');

    try {
      // 强制停止 - 即使出错也继续
      await botManager.stop().catch((error) => {
        console.warn('停止过程中出现错误，但继续执行:', error);
      });
    } catch (error) {
      console.warn('停止失败，但继续强制重启:', error);
    }

    // 确保重置状态
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 启动服务
    await botManager.start();

    // 记录日志
    await prisma.commonLog.create({
      data: {
        action: 'BOT_FORCE_RESTART',
        detail: `管理员 ${session.user.name} 执行了强制重启操作`,
        userId: session.user.id,
      },
    });

    console.log('✅ 强制重启完成');
    return NextResponse.json({ message: 'Bot 服务强制重启成功' });
  } catch (error: any) {
    console.error('强制重启 Bot 服务失败:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
