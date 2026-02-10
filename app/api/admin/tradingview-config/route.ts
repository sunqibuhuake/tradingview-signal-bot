import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * GET /api/admin/tradingview-config - 获取 TradingView 配置列表
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const isActive = searchParams.get('isActive');

    const skip = (page - 1) * limit;

    // 构建查询条件
    const where: any = {};

    if (isActive !== null && isActive !== undefined) {
      where.isActive = isActive === 'true';
    }

    // 查询数据
    const [configs, total] = await Promise.all([
      prisma.tradingViewConfig.findMany({
        where,
        skip,
        take: limit,
        orderBy: [
          { isPrimary: 'desc' }, // 主配置排在前面
          { createdAt: 'desc' },
        ],
      }),
      prisma.tradingViewConfig.count({ where }),
    ]);

    return NextResponse.json({
      configs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('获取 TradingView 配置列表失败:', error);
    return NextResponse.json({ error: '获取失败' }, { status: 500 });
  }
}

/**
 * POST /api/admin/tradingview-config - 创建 TradingView 配置
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, session, signature, isActive, isPrimary } = body;

    // 验证必填字段
    if (!name || !session || !signature) {
      return NextResponse.json(
        { error: 'Missing required fields: name, session, and signature are required' },
        { status: 400 }
      );
    }

    // 检查名称是否已存在
    const existingConfig = await prisma.tradingViewConfig.findUnique({
      where: { name },
    });

    if (existingConfig) {
      return NextResponse.json(
        { error: 'Configuration with this name already exists' },
        { status: 409 }
      );
    }

    // 如果设置为主配置，需要先取消其他配置的主配置状态
    if (isPrimary) {
      await prisma.tradingViewConfig.updateMany({
        where: { isPrimary: true },
        data: { isPrimary: false },
      });
    }

    // 创建配置
    const config = await prisma.tradingViewConfig.create({
      data: {
        name,
        description,
        session,
        signature,
        isActive: isActive ?? true,
        isPrimary: isPrimary ?? false,
      },
    });

    return NextResponse.json(config, { status: 201 });
  } catch (error: any) {
    console.error('创建 TradingView 配置失败:', error);
    return NextResponse.json({ error: '创建失败' }, { status: 500 });
  }
}
