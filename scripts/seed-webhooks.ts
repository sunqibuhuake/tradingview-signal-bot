import prisma from '../lib/prisma';

async function seedWebhooks() {
  console.log('🌱 开始添加示例 Webhook...');

  // 检查是否已存在 Webhook
  const existingCount = await prisma.dingTalkWebhook.count();
  
  if (existingCount > 0) {
    console.log(`已存在 ${existingCount} 个 Webhook，跳过种子数据`);
    return;
  }

  // 创建示例 Webhook
  const webhook = await prisma.dingTalkWebhook.create({
    data: {
      name: '默认通知群',
      description: '主要交易信号通知群',
      webhookUrl: process.env.DINGTALK_WEBHOOK || 'https://oapi.dingtalk.com/robot/send?access_token=example',
      safeWord: process.env.DINGTALK_SAFE_WORD || '交易信号',
      isActive: true,
    },
  });

  console.log(`✅ 创建示例 Webhook: ${webhook.name}`);
  console.log('💡 提示：请在后台管理界面更新为实际的 Webhook URL 和安全词');
}

async function main() {
  try {
    await seedWebhooks();
    console.log('✅ Webhook 种子数据添加完成');
  } catch (error) {
    console.error('❌ 添加种子数据失败:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
