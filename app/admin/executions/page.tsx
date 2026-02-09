'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import dayjs from 'dayjs';
import { IndicatorResult, Market, Task, TaskExecution } from '@/generated/prisma';

type ExecutionResult = TaskExecution & {
  task: Task & {
    market: Market;
  };
  _count: {
    indicatorResults: number;
  };
};

interface ExecutionsResponse {
  executions: ExecutionResult[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  stats: {
    successCount: number;
    failedCount: number;
    avgDuration: number;
  };
}

const statusColors = {
  SUCCESS: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  FAILED: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  PARTIAL: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
};

const statusLabels = {
  SUCCESS: '成功',
  FAILED: '失败',
  PARTIAL: '部分成功',
};

export default function ExecutionsPage() {
  const [page, setPage] = useState(1);
  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  const { data, isLoading } = useQuery<ExecutionsResponse>({
    queryKey: ['executions', page, selectedTaskId],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '50',
      });
      if (selectedTaskId) {
        params.append('taskId', selectedTaskId);
      }
      const res = await fetch(`/api/admin/executions?${params}`);
      if (!res.ok) throw new Error('Failed to fetch executions');
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">加载中...</div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            执行记录
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            查看所有任务的执行历史和结果
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          {/* TODO: Add filter options */}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    成功执行
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {data?.stats?.successCount || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    失败执行
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {data?.stats?.failedCount || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    平均耗时
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {data?.stats?.avgDuration ? `${(data.stats.avgDuration / 1000).toFixed(2)}s` : '-'}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">
                      执行时间
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      任务名称
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      标的
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      结果数量
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      耗时
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      状态
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">操作</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                  {data?.executions?.map((execution: ExecutionResult) => (
                    <tr key={execution.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white sm:pl-6">
                        {dayjs(execution.executedAt).format('YYYY-MM-DD HH:mm:ss')}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-900 dark:text-white">
                        {execution.task.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <div className="flex flex-col">
                          <div className="text-gray-900 dark:text-white">
                            {execution.task.market.name}
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            {execution.task.market.symbol}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {execution._count.indicatorResults}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {execution.duration ? (execution.duration / 1000).toFixed(2) : '0.00'}s
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${statusColors[execution.status]}`}>
                          {statusLabels[execution.status]}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {/* TODO: View Details */}}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          查看详情
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {(!data?.executions || data.executions.length === 0) && (
                <div className="text-center py-12 bg-white dark:bg-gray-900">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">暂无执行记录</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    任务执行后，记录将显示在这里
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {data?.pagination && data.pagination.totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 sm:px-6 mt-4 rounded-lg">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              上一页
            </button>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={page >= data.pagination.totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              下一页
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                显示 <span className="font-medium">{(page - 1) * 50 + 1}</span> 到{' '}
                <span className="font-medium">
                  {Math.min(page * 50, data.pagination.total)}
                </span>{' '}
                共 <span className="font-medium">{data.pagination.total}</span> 条
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 disabled:opacity-50"
                >
                  上一页
                </button>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300">
                  {page} / {data.pagination.totalPages}
                </span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={page >= data.pagination.totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 disabled:opacity-50"
                >
                  下一页
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
