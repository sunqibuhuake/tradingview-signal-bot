'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TasksHeader } from './components/TasksHeader';
import { TasksTable } from './components/TasksTable';
import { TasksPagination } from './components/TasksPagination';
import { EmptyState } from '@/app/components/EmptyState';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';

export default function TasksPage() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['tasks', page],
    queryFn: async () => {
      const res = await fetch(`/api/admin/tasks?page=${page}&limit=20`);
      if (!res.ok) throw new Error('Failed to fetch tasks');
      return res.json();
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const hasTasks = data?.tasks && data.tasks.length > 0;

  const handleCreateClick = () => {
    router.push('/admin/tasks/new');
  };

  return (
    <div className="space-y-6">
      <TasksHeader onCreateClick={handleCreateClick} />

      {hasTasks ? (
        <>
          <TasksTable
            tasks={data.tasks}
            onRefetch={refetch}
          />

          {data.pagination && data.pagination.totalPages > 1 && (
            <TasksPagination
              currentPage={page}
              totalPages={data.pagination.totalPages}
              total={data.pagination.total}
              onPageChange={setPage}
            />
          )}
        </>
      ) : (
        <EmptyState
          icon="clock"
          title="暂无任务"
          description="开始创建您的第一个监控任务"
          action={
            <Button onClick={handleCreateClick}>
              <Plus className="mr-2 h-4 w-4" />
              创建任务
            </Button>
          }
        />
      )}
    </div>
  );
}
