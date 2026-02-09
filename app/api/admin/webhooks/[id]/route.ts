import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * GET /api/admin/webhooks/[id] - 获取单个 Webhook
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const webhook = await prisma.dingTalkWebhook.findUnique({
      where: { id },
      include: {
        tasks: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
        _count: {
          select: { tasks: true },
        },
      },
    });

    if (!webhook) {
      return NextResponse.json({ error: 'Webhook not found' }, { status: 404 });
    }

    return NextResponse.json(webhook);
  } catch (error: any) {
    console.error('获取 Webhook 失败:', error);
    return NextResponse.json({ error: '获取失败' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/webhooks/[id] - 更新 Webhook
 */
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { name, description, webhookUrl, secret, isActive } = body;

    // 验证 Webhook 是否存在
    const existingWebhook = await prisma.dingTalkWebhook.findUnique({
      where: { id },
    });

    if (!existingWebhook) {
      return NextResponse.json({ error: 'Webhook not found' }, { status: 404 });
    }

    // 如果更新 URL，验证格式
    if (webhookUrl) {
      try {
        new URL(webhookUrl);
      } catch {
        return NextResponse.json(
          { error: 'Invalid webhook URL' },
          { status: 400 }
        );
      }
    }

    // 更新 Webhook
    const webhook = await prisma.dingTalkWebhook.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(webhookUrl && { webhookUrl }),
        ...(secret !== undefined && { secret }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    return NextResponse.json(webhook);
  } catch (error: any) {
    console.error('更新 Webhook 失败:', error);
    return NextResponse.json({ error: '更新失败' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/webhooks/[id] - 删除 Webhook
 */
export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // 检查是否有关联的任务
    const tasksCount = await prisma.task.count({
      where: { dingTalkWebhookId: id },
    });

    if (tasksCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete webhook: ${tasksCount} task(s) are using it` },
        { status: 400 }
      );
    }

    // 删除 Webhook
    await prisma.dingTalkWebhook.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('删除 Webhook 失败:', error);
    return NextResponse.json({ error: '删除失败' }, { status: 500 });
  }
}
