import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

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

    const task = await prisma.task.findUnique({
      where: { id },
      include: {
        market: true,
        taskIndicators: {
          include: {
            indicator: true,
          },
        },
        _count: {
          select: { executions: true },
        },
      },
    });

    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to fetch task:', error);
    return NextResponse.json(
      { error: 'Failed to fetch task' },
      { status: 500 }
    );
  }
}

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
    const { indicatorIds, ...updateData } = body;

    // 如果要更新指标关联
    if (indicatorIds) {
      // 删除旧关联
      await prisma.taskIndicator.deleteMany({
        where: { taskId: id },
      });

      // 创建新关联
      await prisma.taskIndicator.createMany({
        data: indicatorIds.map((indicatorId: string, index: number) => ({
          taskId: id,
          indicatorId,
          priority: index,
        })),
      });
    }

    const task = await prisma.task.update({
      where: { id },
      data: updateData,
      include: {
        market: true,
        taskIndicators: {
          include: {
            indicator: true,
          },
        },
      },
    });

    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'UPDATE_TASK',
        detail: `Updated task: ${task.name}`,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to update task:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

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

    const task = await prisma.task.delete({
      where: { id },
    });

    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'DELETE_TASK',
        detail: `Deleted task: ${task.name}`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
