import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET /api/admin/markets/[id] - 获取单个标的
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;

    const market = await prisma.market.findUnique({
      where: { id },
      include: {
        tasks: {
          include: {
            taskIndicators: {
              include: {
                indicator: true,
              },
            },
          },
        },
      },
    });

    if (!market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 });
    }

    return NextResponse.json(market);
  } catch (error) {
    console.error('Failed to fetch market:', error);
    return NextResponse.json(
      { error: 'Failed to fetch market' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/markets/[id] - 更新标的
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const { name, code, icon, description, exchange, metadata, isActive } = body;

    const market = await prisma.market.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(code && { code }),
        ...(icon !== undefined && { icon }),
        ...(description !== undefined && { description }),
        ...(exchange !== undefined && { exchange }),
        ...(metadata !== undefined && { metadata }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    // 记录日志
    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'UPDATE_MARKET',
        detail: `Updated market: ${market.name} (${market.symbol})`,
      },
    });

    return NextResponse.json(market);
  } catch (error) {
    console.error('Failed to update market:', error);
    return NextResponse.json(
      { error: 'Failed to update market' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/markets/[id] - 删除标的
export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;

    // 检查是否有关联的任务
    const tasksCount = await prisma.task.count({
      where: { marketId: id },
    });

    if (tasksCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete market with ${tasksCount} active tasks` },
        { status: 400 }
      );
    }

    const market = await prisma.market.delete({
      where: { id },
    });

    // 记录日志
    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'DELETE_MARKET',
        detail: `Deleted market: ${market.name} (${market.symbol})`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete market:', error);
    return NextResponse.json(
      { error: 'Failed to delete market' },
      { status: 500 }
    );
  }
}
