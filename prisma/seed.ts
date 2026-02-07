import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 开始数据库初始化...');

  // 创建管理员账户
  const adminEmail = 'admin@tradingview.bot';
  const adminPassword = 'admin123456'; // 请在生产环境中修改

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: '系统管理员',
      role: 'ADMIN',
      credits: 0,
    },
  });

  console.log('✅ 管理员账户已创建:', {
    email: admin.email,
    password: '请使用 admin123456 登录后立即修改密码',
  });

  // 创建示例指标
  const emaIndicator = await prisma.indicator.upsert({
    where: { tradingViewId: 'USER;d442347285584c9da91f3b74d7875057' },
    update: {},
    create: {
      name: 'EMA 交叉策略',
      tradingViewId: 'USER;d442347285584c9da91f3b74d7875057',
      description: '基于快慢 EMA 均线交叉的交易策略',
      author: 'System',
      version: '1.0.0',
      outputFields: {
        FAST_EMA: 'number',
        SLOW_EMA: 'number',
        Buy_Alert: 'boolean',
        Sell_Alert: 'boolean',
      },
      isActive: true,
      isPublic: true,
      documentation: `
# EMA 交叉策略指标

## 输出字段说明

- **FAST_EMA**: 快速 EMA 值
- **SLOW_EMA**: 慢速 EMA 值
- **Buy_Alert**: 买入信号（快线上穿慢线）
- **Sell_Alert**: 卖出信号（快线下穿慢线）

## 使用建议

适用于趋势明显的市场，建议结合其他指标使用。
      `.trim(),
    },
  });

  console.log('✅ 示例指标已创建:', emaIndicator.name);

  // 创建示例标的 - A股
  const aStockMarkets = [
    {
      name: '招商银行',
      code: '600036',
      symbol: 'SSE:600036',
      type: 'A_STOCK',
      exchange: 'SSE',
      description: '中国领先的股份制商业银行',
    },
    {
      name: '贵州茅台',
      code: '600519',
      symbol: 'SSE:600519',
      type: 'A_STOCK',
      exchange: 'SSE',
      description: '中国白酒行业龙头企业',
    },
  ];

  for (const market of aStockMarkets) {
    await prisma.market.upsert({
      where: { symbol: market.symbol },
      update: {},
      create: market,
    });
  }

  console.log('✅ A股标的已创建:', aStockMarkets.length, '个');

  // 创建示例标的 - 加密货币
  const cryptoMarkets = [
    {
      name: '比特币',
      code: 'BTCUSDT',
      symbol: 'BINANCE:BTCUSDT',
      type: 'CRYPTO',
      exchange: 'BINANCE',
      description: '比特币对 USDT 交易对',
    },
    {
      name: '以太坊',
      code: 'ETHUSDT',
      symbol: 'BINANCE:ETHUSDT',
      type: 'CRYPTO',
      exchange: 'BINANCE',
      description: '以太坊对 USDT 交易对',
    },
  ];

  for (const market of cryptoMarkets) {
    await prisma.market.upsert({
      where: { symbol: market.symbol },
      update: {},
      create: market,
    });
  }

  console.log('✅ 加密货币标的已创建:', cryptoMarkets.length, '个');

  // 创建示例任务
  const btcMarket = await prisma.market.findUnique({
    where: { symbol: 'BINANCE:BTCUSDT' },
  });

  if (btcMarket) {
    const task = await prisma.task.create({
      data: {
        name: 'BTC 5分钟 EMA 监控',
        description: '实时监控 BTC/USDT 交易对的 EMA 信号',
        marketId: btcMarket.id,
        timeframe: 'M5',
        range: 500,
        executionMode: 'REALTIME',
        status: 'PAUSED', // 默认暂停，需要手动启动
        enableNotification: true,
        notificationChannels: {
          dingtalk: true,
        },
        createdBy: admin.id,
        taskIndicators: {
          create: [
            {
              indicatorId: emaIndicator.id,
              priority: 0,
            },
          ],
        },
      },
    });

    console.log('✅ 示例任务已创建:', task.name);
  }

  console.log('\n🎉 数据库初始化完成！');
  console.log('\n📝 管理员登录信息:');
  console.log('   Email:', adminEmail);
  console.log('   Password:', adminPassword);
  console.log('\n⚠️  请登录后立即修改密码！');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ 数据库初始化失败:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
