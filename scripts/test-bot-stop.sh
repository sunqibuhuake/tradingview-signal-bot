#!/bin/bash

# Bot 停止功能测试脚本

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧪 Bot 停止功能测试"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

BASE_URL="http://localhost:3000"

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. 检查 Bot 状态
echo "1️⃣ 检查 Bot 当前状态..."
STATUS=$(curl -s "$BASE_URL/api/admin/bot")
echo "$STATUS" | jq '.'

IS_RUNNING=$(echo "$STATUS" | jq -r '.isRunning')

if [ "$IS_RUNNING" = "false" ]; then
    echo -e "${YELLOW}⚠️  Bot 未运行，先启动 Bot...${NC}"
    echo ""
    
    # 启动 Bot
    echo "2️⃣ 启动 Bot..."
    START_RESULT=$(curl -s -X POST "$BASE_URL/api/admin/bot/start")
    echo "$START_RESULT" | jq '.'
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Bot 启动成功${NC}"
        sleep 2
    else
        echo -e "${RED}❌ Bot 启动失败${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ Bot 正在运行${NC}"
fi

echo ""

# 3. 停止 Bot
echo "3️⃣ 测试停止 Bot..."
STOP_RESULT=$(curl -s -X POST "$BASE_URL/api/admin/bot/stop" -w "\nHTTP_STATUS:%{http_code}")

HTTP_STATUS=$(echo "$STOP_RESULT" | grep "HTTP_STATUS" | cut -d':' -f2)
RESPONSE=$(echo "$STOP_RESULT" | grep -v "HTTP_STATUS")

echo "HTTP Status: $HTTP_STATUS"
echo "$RESPONSE" | jq '.'

if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Bot 停止成功${NC}"
else
    echo -e "${RED}❌ Bot 停止失败 (HTTP $HTTP_STATUS)${NC}"
    echo "错误信息:"
    echo "$RESPONSE" | jq -r '.error'
    exit 1
fi

echo ""

# 4. 验证 Bot 状态
echo "4️⃣ 验证 Bot 已停止..."
sleep 1
FINAL_STATUS=$(curl -s "$BASE_URL/api/admin/bot")
echo "$FINAL_STATUS" | jq '.'

FINAL_IS_RUNNING=$(echo "$FINAL_STATUS" | jq -r '.isRunning')

if [ "$FINAL_IS_RUNNING" = "false" ]; then
    echo -e "${GREEN}✅ 验证通过：Bot 已停止${NC}"
else
    echo -e "${RED}❌ 验证失败：Bot 仍在运行${NC}"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 所有测试通过！${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
