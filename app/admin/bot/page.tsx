'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface BotStatus {
  isRunning: boolean;
  stats: {
    totalTasks: number;
    activeTasks: number;
    pausedTasks: number;
    errorTasks: number;
  };
}

export default function BotControlPage() {
  const queryClient = useQueryClient();

  const { data: status, isLoading } = useQuery<BotStatus>({
    queryKey: ['bot-status'],
    queryFn: async () => {
      const res = await fetch('/api/admin/bot');
      if (!res.ok) throw new Error('Failed to fetch bot status');
      return res.json();
    },
    refetchInterval: 5000, // 每5秒刷新一次
  });

  const startMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/admin/bot/start', { method: 'POST' });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success('Bot 服务启动成功');
      queryClient.invalidateQueries({ queryKey: ['bot-status'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '启动失败');
    },
  });

  const stopMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/admin/bot/stop', { method: 'POST' });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success('Bot 服务停止成功');
      queryClient.invalidateQueries({ queryKey: ['bot-status'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '停止失败');
    },
  });

  const restartMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/admin/bot/restart', { method: 'POST' });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success('Bot 服务重启成功');
      queryClient.invalidateQueries({ queryKey: ['bot-status'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '重启失败');
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
            Bot 服务控制
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            管理和监控交易信号机器人服务
          </p>
        </div>
      </div>

      {/* 服务状态卡片 */}
      <div className="mt-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`h-4 w-4 rounded-full mr-3 ${
                    status?.isRunning
                      ? 'bg-green-500 animate-pulse'
                      : 'bg-gray-400'
                  }`}
                ></div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    服务状态
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {status?.isRunning ? '运行中' : '已停止'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                {!status?.isRunning ? (
                  <button
                    onClick={() => startMutation.mutate()}
                    disabled={startMutation.isPending}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                  >
                    {startMutation.isPending ? '启动中...' : '启动服务'}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => restartMutation.mutate()}
                      disabled={restartMutation.isPending}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {restartMutation.isPending ? '重启中...' : '重启服务'}
                    </button>
                    <button
                      onClick={() => stopMutation.mutate()}
                      disabled={stopMutation.isPending}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                    >
                      {stopMutation.isPending ? '停止中...' : '停止服务'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 统计信息 */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    总任务数
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {status?.stats.totalTasks || 0}
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
                    运行中
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {status?.stats.activeTasks || 0}
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
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    已暂停
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {status?.stats.pausedTasks || 0}
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
                    错误
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {status?.stats.errorTasks || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 说明信息 */}
      <div className="mt-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                使用说明
              </h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>启动服务后，所有状态为"运行中"的任务将自动开始执行</li>
                  <li>实时监控任务（加密货币）将持续监听市场信号</li>
                  <li>定时扫描任务（A股）将按照设定的时间周期执行</li>
                  <li>重启服务将停止所有任务并重新加载配置</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
