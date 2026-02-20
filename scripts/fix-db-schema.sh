#!/bin/bash
# 手动修复 Prisma schema 与数据库不一致的问题

echo "=== Prisma DB Push 手动修复脚本 ==="
echo

# 1. 确保 signalTitle 列存在
echo "1. 添加 signalTitle 列（如果不存在）..."
npx prisma db execute --stdin <<< 'ALTER TABLE indicator_results ADD COLUMN IF NOT EXISTS "signalTitle" TEXT;'

# 2. 确保 Session 表有唯一约束
echo "2. 添加 Session.sessionToken 唯一约束..."
npx prisma db execute --stdin <<< 'ALTER TABLE "Session" DROP CONSTRAINT IF EXISTS "Session_sessionToken_key"; ALTER TABLE "Session" ADD CONSTRAINT "Session_sessionToken_key" UNIQUE ("sessionToken");'

# 3. 添加其他需要的唯一约束
echo "3. 添加 signal_statistics 唯一约束..."
npx prisma db execute --stdin <<< 'ALTER TABLE signal_statistics DROP CONSTRAINT IF EXISTS "signal_statistics_marketId_indicatorId_timeframe_date_key"; ALTER TABLE signal_statistics ADD CONSTRAINT "signal_statistics_marketId_indicatorId_timeframe_date_key" UNIQUE ("marketId", "indicatorId", "timeframe", date);'

echo "4. 添加 task_indicators 唯一约束..."
npx prisma db execute --stdin <<< 'ALTER TABLE task_indicators DROP CONSTRAINT IF EXISTS "task_indicators_taskId_indicatorId_key"; ALTER TABLE task_indicators ADD CONSTRAINT "task_indicators_taskId_indicatorId_key" UNIQUE ("taskId", "indicatorId");'

echo
echo "=== 手动修复完成 ==="
echo "现在可以运行: npx prisma generate"
