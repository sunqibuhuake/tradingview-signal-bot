import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * GET /api/admin/tradingview-config/[id] - 获取单个配置
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const config = await prisma.tradingViewConfig.findUnique({
      where: { id },
    });

    if (!config) {
      return NextResponse.json({ error: 'Config not found' }, { status: 404 });
    }

    return NextResponse.json(config);
  } catch (error: any) {
    console.error('获取配置失败:', error);
    return NextResponse.json({ error: '获取失败' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/tradingview-config/[id] - 更新配置
 */
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { name, description, session, signature, isActive, isPrimary } = body;

    // 验证配置是否存在
    const existingConfig = await prisma.tradingViewConfig.findUnique({
      where: { id },
    });

    if (!existingConfig) {
      return NextResponse.json({ error: 'Config not found' }, { status: 404 });
    }

    // 如果更新名称，检查是否与其他配置重复
    if (name && name !== existingConfig.name) {
      const duplicateName = await prisma.tradingViewConfig.findUnique({
        where: { name },
      });

      if (duplicateName) {
        return NextResponse.json(
          { error: 'Configuration with this name already exists' },
          { status: 409 }
        );
      }
    }

    // 如果设置为主配置，需要先取消其他配置的主配置状态
    if (isPrimary && !existingConfig.isPrimary) {
      await prisma.tradingViewConfig.updateMany({
        where: { 
          isPrimary: true,
          id: { not: id },
        },
        data: { isPrimary: false },
      });
    }

    // 更新配置
    const config = await prisma.tradingViewConfig.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(session && { session }),
        ...(signature && { signature }),
        ...(isActive !== undefined && { isActive }),
        ...(isPrimary !== undefined && { isPrimary }),
      },
    });

    return NextResponse.json(config);
  } catch (error: any) {
    console.error('更新配置失败:', error);
    return NextResponse.json({ error: '更新失败' }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/tradingview-config/[id] - 删除配置
 */
export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // 检查是否为主配置
    const config = await prisma.tradingViewConfig.findUnique({
      where: { id },
    });

    if (!config) {
      return NextResponse.json({ error: 'Config not found' }, { status: 404 });
    }

    if (config.isPrimary) {
      return NextResponse.json(
        { error: 'Cannot delete primary configuration. Please set another config as primary first.' },
        { status: 400 }
      );
    }

    // 删除配置
    await prisma.tradingViewConfig.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('删除配置失败:', error);
    return NextResponse.json({ error: '删除失败' }, { status: 500 });
  }
}
