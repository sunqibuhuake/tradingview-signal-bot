import prisma from '../lib/prisma';

/**
 * Webhook 安全词迁移脚本
 * 
 * 用途：为现有的 Webhook 添加默认安全词
 * 
 * 使用方法：
 * pnpm tsx scripts/migrate-webhooks-safeword.ts
 */

async function migrateWebhooks() {
  console.log('🔄 开始迁移 Webhook 安全词...\n');

  // 从环境变量或默认值获取安全词
  const defaultSafeWord = process.env.DINGTALK_SAFE_WORD || '交易信号';
  console.log(`默认安全词: "${defaultSafeWord}"\n`);

  try {
    // 查找所有 Webhook
    const allWebhooks = await prisma.dingTalkWebhook.findMany();
    console.log(`📊 数据库中共有 ${allWebhooks.length} 个 Webhook\n`);

    if (allWebhooks.length === 0) {
      console.log('✅ 没有需要迁移的 Webhook');
      return;
    }

    // 显示当前状态
    console.log('当前 Webhook 状态：');
    allWebhooks.forEach((webhook, index) => {
      const safeWordStatus = webhook.safeWord ? `✓ ${webhook.safeWord}` : '✗ 未设置';
      console.log(`${index + 1}. ${webhook.name} - 安全词: ${safeWordStatus}`);
    });
    console.log();

    // 查找需要更新的 Webhook（没有安全词的）
    const webhooksToUpdate = allWebhooks.filter(w => !w.safeWord);

    if (webhooksToUpdate.length === 0) {
      console.log('✅ 所有 Webhook 已配置安全词，无需迁移');
      return;
    }

    console.log(`🔧 找到 ${webhooksToUpdate.length} 个需要更新的 Webhook\n`);

    // 更新每个 Webhook
    let successCount = 0;
    let errorCount = 0;

    for (const webhook of webhooksToUpdate) {
      try {
        await prisma.dingTalkWebhook.update({
          where: { id: webhook.id },
          data: { safeWord: defaultSafeWord },
        });
        console.log(`✅ 已更新: ${webhook.name}`);
        successCount++;
      } catch (error: any) {
        console.error(`❌ 更新失败 ${webhook.name}: ${error.message}`);
        errorCount++;
      }
    }

    console.log('\n📈 迁移结果：');
    console.log(`  成功: ${successCount}`);
    console.log(`  失败: ${errorCount}`);
    console.log(`  总计: ${webhooksToUpdate.length}`);

    if (successCount > 0) {
      console.log('\n🎉 迁移完成！');
      console.log('\n⚠️  重要提示：');
      console.log('1. 请确认钉钉机器人已设置自定义关键词');
      console.log(`2. 关键词应为: "${defaultSafeWord}"`);
      console.log('3. 测试发送消息以确认配置正确');
      console.log('4. 如有需要，可在后台管理界面单独调整每个 Webhook 的安全词');
    }

  } catch (error: any) {
    console.error('\n❌ 迁移过程中发生错误:', error);
    throw error;
  }
}

async function main() {
  try {
    await migrateWebhooks();
  } catch (error) {
    console.error('\n❌ 迁移失败');
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// 显示警告信息
console.log('⚠️  警告：此脚本将为所有未配置安全词的 Webhook 设置默认安全词');
console.log('⚠️  请确保已阅读迁移文档: docs/WEBHOOK_SAFEWORD_MIGRATION.md\n');

main();
