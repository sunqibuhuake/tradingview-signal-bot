import prisma from '@/lib/prisma';

export interface TradingViewCredentials {
  session: string;
  signature: string;
  source: 'database' | 'env';
  configId?: string;
  configName?: string;
}

/**
 * 获取 TradingView 配置
 * 优先级：主配置 > 环境变量
 */
export async function getTradingViewCredentials(): Promise<TradingViewCredentials> {
  try {
    // 1. 尝试从数据库获取主配置
    let config = await prisma.tradingViewConfig.findFirst({
      where: {
        isPrimary: true,
        isActive: true,
      },
    });

    // 2. 如果没有主配置，获取第一个激活的配置
    if (!config) {
      config = await prisma.tradingViewConfig.findFirst({
        where: { isActive: true },
        orderBy: { createdAt: 'asc' },
      });
    }

    // 3. 如果找到数据库配置，返回并更新最后使用时间
    if (config) {
      // 异步更新最后使用时间，不阻塞返回
      prisma.tradingViewConfig.update({
        where: { id: config.id },
        data: { lastUsedAt: new Date() },
      }).catch(console.error);

      return {
        session: config.session,
        signature: config.signature,
        source: 'database',
        configId: config.id,
        configName: config.name,
      };
    }

    // 4. 回退到环境变量
    if (process.env.SESSION && process.env.SIGNATURE) {
      return {
        session: process.env.SESSION,
        signature: process.env.SIGNATURE,
        source: 'env',
      };
    }

    throw new Error('No TradingView configuration found. Please configure SESSION and SIGNATURE.');
  } catch (error) {
    // 如果数据库查询失败，回退到环境变量
    if (process.env.SESSION && process.env.SIGNATURE) {
      console.warn('Failed to fetch TradingView config from database, using env variables:', error);
      return {
        session: process.env.SESSION,
        signature: process.env.SIGNATURE,
        source: 'env',
      };
    }

    throw error;
  }
}
