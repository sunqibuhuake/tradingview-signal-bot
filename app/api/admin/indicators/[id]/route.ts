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

    const indicator = await prisma.indicator.findUnique({
      where: { id: params.id },
      include: {
        taskIndicators: {
          include: {
            task: {
              include: {
                market: true,
              },
            },
          },
        },
      },
    });

    if (!indicator) {
      return NextResponse.json({ error: 'Indicator not found' }, { status: 404 });
    }

    return NextResponse.json(indicator);
  } catch (error) {
    console.error('Failed to fetch indicator:', error);
    return NextResponse.json(
      { error: 'Failed to fetch indicator' },
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

    const indicator = await prisma.indicator.update({
      where: { id: params.id },
      data: body,
    });

    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'UPDATE_INDICATOR',
        detail: `Updated indicator: ${indicator.name}`,
      },
    });

    return NextResponse.json(indicator);
  } catch (error) {
    console.error('Failed to update indicator:', error);
    return NextResponse.json(
      { error: 'Failed to update indicator' },
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

    const tasksCount = await prisma.taskIndicator.count({
      where: { indicatorId: params.id },
    });

    if (tasksCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete indicator used in ${tasksCount} tasks` },
        { status: 400 }
      );
    }

    const indicator = await prisma.indicator.delete({
      where: { id: params.id },
    });

    await prisma.commonLog.create({
      data: {
        userId: session.user.id,
        action: 'DELETE_INDICATOR',
        detail: `Deleted indicator: ${indicator.name}`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete indicator:', error);
    return NextResponse.json(
      { error: 'Failed to delete indicator' },
      { status: 500 }
    );
  }
}
