import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * GET /api/admin/tradingview-config/primary - 获取主配置
 */
export async function GET(_request: NextRequest) {
  try {
    // 查找主配置
    let config = await prisma.tradingViewConfig.findFirst({
      where: { 
        isPrimary: true,
        isActive: true,
      },
    });

    // 如果没有主配置，返回第一个激活的配置
    if (!config) {
      config = await prisma.tradingViewConfig.findFirst({
        where: { isActive: true },
        orderBy: { createdAt: 'asc' },
      });
    }

    // 如果还是没有，返回环境变量配置
    if (!config && (process.env.SESSION || process.env.SIGNATURE)) {
      return NextResponse.json({
        session: process.env.SESSION || '',
        signature: process.env.SIGNATURE || '',
        source: 'env',
      });
    }

    if (!config) {
      return NextResponse.json(
        { error: 'No TradingView configuration found' },
        { status: 404 }
      );
    }

    // 更新最后使用时间
    await prisma.tradingViewConfig.update({
      where: { id: config.id },
      data: { lastUsedAt: new Date() },
    });

    return NextResponse.json({
      session: config.session,
      signature: config.signature,
      source: 'database',
      configId: config.id,
      configName: config.name,
    });
  } catch (error: any) {
    console.error('获取主配置失败:', error);
    return NextResponse.json({ error: '获取失败' }, { status: 500 });
  }
}
