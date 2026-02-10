import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * GET /api/admin/webhooks - 获取 Webhook 列表
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const isActive = searchParams.get('isActive');

    const skip = (page - 1) * limit;

    // 构建查询条件
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (isActive !== null && isActive !== undefined) {
      where.isActive = isActive === 'true';
    }

    // 查询数据
    const [webhooks, total] = await Promise.all([
      prisma.dingTalkWebhook.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { tasks: true },
          },
        },
      }),
      prisma.dingTalkWebhook.count({ where }),
    ]);

    return NextResponse.json({
      webhooks,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('获取 Webhook 列表失败:', error);
    return NextResponse.json({ error: '获取失败' }, { status: 500 });
  }
}

/**
 * POST /api/admin/webhooks - 创建 Webhook
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, webhookUrl, safeWord, isActive } = body;

    // 验证必填字段
    if (!name || !webhookUrl || !safeWord) {
      return NextResponse.json(
        { error: 'Missing required fields: name, webhookUrl, and safeWord are required' },
        { status: 400 }
      );
    }

    // 验证 URL 格式
    try {
      new URL(webhookUrl);
    } catch {
      return NextResponse.json(
        { error: 'Invalid webhook URL' },
        { status: 400 }
      );
    }

    // 创建 Webhook
    const webhook = await prisma.dingTalkWebhook.create({
      data: {
        name,
        description,
        webhookUrl,
        safeWord,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(webhook, { status: 201 });
  } catch (error: any) {
    console.error('创建 Webhook 失败:', error);
    return NextResponse.json({ error: '创建失败' }, { status: 500 });
  }
}
