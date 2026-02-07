import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const task = await prisma.task.findUnique({
      where: { id: params.id },
      include: {
        market: true,
        taskIndicators: {
          include: {
            indicator: true,
          },
        },
        executions: {
          take: 10,
          orderBy: { executedAt: 'desc' },
          include: {
            indicatorResults: true,
          },
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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { indicatorIds, ...updateData } = body;

    // 如果要更新指标关联
    if (indicatorIds) {
      // 删除旧关联
      await prisma.taskIndicator.deleteMany({
        where: { taskId: params.id },
      });

      // 创建新关联
      await prisma.taskIndicator.createMany({
        data: indicatorIds.map((id: string, index: number) => ({
          taskId: params.id,
          indicatorId: id,
          priority: index,
        })),
      });
    }

    const task = await prisma.task.update({
      where: { id: params.id },
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
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const task = await prisma.task.delete({
      where: { id: params.id },
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
