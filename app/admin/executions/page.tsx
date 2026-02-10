'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import dayjs from 'dayjs';
import { IndicatorResult, Market, Task, TaskExecution } from '@/generated/prisma';
import { CheckCircle2, XCircle, Clock, FileText, TrendingUp, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const statusConfig = {
  SUCCESS: {
    label: '成功',
    variant: 'default' as const,
    className: 'bg-success/10 text-success border-success/20',
  },
  FAILED: {
    label: '失败',
    variant: 'destructive' as const,
    className: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  TIMEOUT: {
    label: '超时',
    variant: 'secondary' as const,
    className: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-500/20',
  },
  PARTIAL: {
    label: '部分成功',
    variant: 'secondary' as const,
    className: 'bg-warning/10 text-warning border-warning/20',
  },
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
        <div className="text-muted-foreground">加载中...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          执行记录
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          查看所有任务的执行历史和结果
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-success" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">成功执行</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {data?.stats?.successCount || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <XCircle className="h-6 w-6 text-destructive" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">失败执行</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {data?.stats?.failedCount || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">平均耗时</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {data?.stats?.avgDuration ? `${(data.stats.avgDuration / 1000).toFixed(2)}s` : '-'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  执行时间
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  任务名称
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  标的
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  结果数量
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  耗时
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  状态
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data?.executions?.map((execution: ExecutionResult) => (
                <tr key={execution.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground whitespace-nowrap">
                    {dayjs(execution.executedAt).format('YYYY-MM-DD HH:mm:ss')}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="font-medium text-foreground">{execution.task.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">
                          {execution.task.market.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {execution.task.market.symbol}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <Activity className="h-4 w-4" />
                      {execution._count.indicatorResults}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                    {execution.duration ? (execution.duration / 1000).toFixed(2) : '0.00'}s
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    <Badge className={statusConfig[execution.status].className}>
                      {statusConfig[execution.status].label}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {/* TODO: View Details */}}
                    >
                      查看详情
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {(!data?.executions || data.executions.length === 0) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">暂无执行记录</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                任务执行后，记录将显示在这里
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Pagination */}
      {data?.pagination && data.pagination.totalPages > 1 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-1 justify-between sm:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  上一页
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(p => p + 1)}
                  disabled={page >= data.pagination.totalPages}
                >
                  下一页
                </Button>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    显示 <span className="font-medium text-foreground">{(page - 1) * 50 + 1}</span> 到{' '}
                    <span className="font-medium text-foreground">
                      {Math.min(page * 50, data.pagination.total)}
                    </span>{' '}
                    共 <span className="font-medium text-foreground">{data.pagination.total}</span> 条
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    上一页
                  </Button>
                  <span className="text-sm text-muted-foreground px-2">
                    {page} / {data.pagination.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => p + 1)}
                    disabled={page >= data.pagination.totalPages}
                  >
                    下一页
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
