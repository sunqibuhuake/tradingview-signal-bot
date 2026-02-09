'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import { TaskForm } from '../../components/TaskForm';
import type { SignalTask } from '../../types';

export default function EditTaskPage() {
  const params = useParams();
  const taskId = params.id as string;

  const { data: task, isLoading } = useQuery<SignalTask>({
    queryKey: ['task', taskId],
    queryFn: async () => {
      const res = await fetch(`/api/admin/tasks/${taskId}`);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('任务不存在');
        }
        throw new Error('Failed to fetch task');
      }
      return res.json();
    },
    enabled: !!taskId,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <h2 className="text-2xl font-bold">任务不存在</h2>
        <p className="text-muted-foreground">请检查任务 ID 是否正确</p>
      </div>
    );
  }

  return <TaskForm task={task} mode="edit" />;
}
