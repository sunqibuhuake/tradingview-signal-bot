'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Play, Square, RotateCw, ListTodo, CheckCircle2, PauseCircle, XCircle, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        <div className="text-muted-foreground">加载中...</div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Bot 服务控制
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            管理和监控交易信号机器人服务
          </p>
        </div>
      </div>

      {/* 服务状态卡片 */}
      <div className="mt-8">
        <Card className="border-primary/20 shadow-lg hover:shadow-primary/10 transition-all">
          <CardContent className="px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge
                  variant={status?.isRunning ? 'default' : 'secondary'}
                  className={`gap-2 ${
                    status?.isRunning
                      ? 'bg-success/10 text-success border-success/30 animate-pulse-glow'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      status?.isRunning ? 'bg-success' : 'bg-muted-foreground'
                    }`}
                  />
                  {status?.isRunning ? '运行中' : '已停止'}
                </Badge>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    服务状态
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {status?.isRunning ? '所有任务正常执行' : '服务已停止'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                {!status?.isRunning ? (
                  <Button
                    onClick={() => startMutation.mutate()}
                    disabled={startMutation.isPending}
                    className="gap-2 bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success/70"
                  >
                    <Play className="h-4 w-4" />
                    {startMutation.isPending ? '启动中...' : '启动服务'}
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => restartMutation.mutate()}
                      disabled={restartMutation.isPending}
                      variant="outline"
                      className="gap-2 border-primary/30 hover:bg-primary/10"
                    >
                      <RotateCw className="h-4 w-4" />
                      {restartMutation.isPending ? '重启中...' : '重启服务'}
                    </Button>
                    <Button
                      onClick={() => stopMutation.mutate()}
                      disabled={stopMutation.isPending}
                      variant="destructive"
                      className="gap-2"
                    >
                      <Square className="h-4 w-4" />
                      {stopMutation.isPending ? '停止中...' : '停止服务'}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 统计信息 */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                <ListTodo className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground truncate">
                  总任务数
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {status?.stats.totalTasks || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg hover:shadow-success/5 transition-all hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-xl bg-success/10 p-3 group-hover:bg-success/20 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground truncate">
                  运行中
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {status?.stats.activeTasks || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg hover:shadow-yellow-500/5 transition-all hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-xl bg-yellow-500/10 p-3 group-hover:bg-yellow-500/20 transition-colors">
                <PauseCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground truncate">
                  已暂停
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {status?.stats.pausedTasks || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg hover:shadow-destructive/5 transition-all hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-xl bg-destructive/10 p-3 group-hover:bg-destructive/20 transition-colors">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground truncate">
                  错误
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {status?.stats.errorTasks || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 说明信息 */}
      <div className="mt-8">
        <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Info className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">
                  使用说明
                </h3>
                <div className="mt-3 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>启动服务后，所有状态为"运行中"的任务将自动开始执行</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>实时监控任务（加密货币）将持续监听市场信号</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>定时扫描任务（A股）将按照设定的时间周期执行</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>重启服务将停止所有任务并重新加载配置</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
