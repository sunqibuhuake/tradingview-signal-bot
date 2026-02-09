import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Pause, 
  AlertCircle,
  TrendingUp,
  Clock,
  Calendar,
  Bell,
  Activity,
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import type { SignalTask } from '../types';
import { StatusBadge } from './StatusBadge';
import { ModeBadge } from './ModeBadge';

interface TaskDetailDialogProps {
  task: SignalTask | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRefetch: () => void;
}

export function TaskDetailDialog({
  task,
  open,
  onOpenChange,
  onRefetch,
}: TaskDetailDialogProps) {
  if (!task) return null;

  const handleToggleStatus = async () => {
    const newStatus = task.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
    
    try {
      const res = await fetch(`/api/admin/tasks/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success(newStatus === 'ACTIVE' ? '任务已启动' : '任务已暂停');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '操作失败');
    }
  };

  const formatDate = (dateString?: string | Date | null) => {
    if (!dateString) return '未执行';
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <DialogTitle className="text-2xl">{task.name}</DialogTitle>
              {task.description && (
                <DialogDescription className="text-base">
                  {task.description}
                </DialogDescription>
              )}
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status={task.status} />
              {task.status === 'ACTIVE' ? (
                <Button size="sm" variant="outline" onClick={handleToggleStatus}>
                  <Pause className="mr-2 h-4 w-4" />
                  暂停
                </Button>
              ) : (
                <Button size="sm" onClick={handleToggleStatus}>
                  <Play className="mr-2 h-4 w-4" />
                  启动
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* 错误信息 */}
          {task.status === 'ERROR' && task.errorMessage && (
            <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-destructive">任务执行错误</p>
                <p className="text-sm text-destructive/80 mt-1">{task.errorMessage}</p>
              </div>
            </div>
          )}

          {/* 标的信息 */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              标的信息
            </h3>
            <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">名称</span>
                <span className="font-medium">
                  {task.market.displayName || task.market.name}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">代码</span>
                <span className="font-mono text-sm">{task.market.code}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">交易所</span>
                <span className="font-mono text-sm">{task.market.symbol}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">类型</span>
                <Badge variant="outline">{task.market.type}</Badge>
              </div>
            </div>
          </div>

          {/* 指标配置 */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Activity className="h-4 w-4" />
              指标配置
            </h3>
            <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">关联指标</span>
                <div className="flex flex-wrap gap-2">
                  {task.taskIndicators.map((ti: any, idx: number) => (
                    <Badge key={idx} variant="secondary">
                      {ti.indicator.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">时间周期</span>
                <Badge variant="outline" className="font-mono">
                  {task.timeframe}
                </Badge>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">K线数量</span>
                <span className="font-medium">{task.range}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">执行模式</span>
                <ModeBadge mode={task.executionMode} />
              </div>
            </div>
          </div>

          {/* 执行统计 */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4" />
              执行统计
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="text-2xl font-bold">{task._count.executions}</div>
                <div className="text-sm text-muted-foreground">执行次数</div>
              </div>
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="text-sm font-medium line-clamp-2">
                  {formatDate(task.lastExecutedAt )}
                </div>
                <div className="text-sm text-muted-foreground">最后执行</div>
              </div>
            </div>
          </div>

          {/* 通知配置 */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Bell className="h-4 w-4" />
              通知配置
            </h3>
            <div className="rounded-lg border bg-muted/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">启用通知</span>
                <Badge variant={task.enableNotification ? 'default' : 'secondary'}>
                  {task.enableNotification ? '已启用' : '已禁用'}
                </Badge>
              </div>
            </div>
          </div>

          {/* 时间信息 */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              时间信息
            </h3>
            <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">创建时间</span>
                <span className="text-sm">{formatDate(task.createdAt)}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">更新时间</span>
                <span className="text-sm">{formatDate(task.updatedAt)}</span>
              </div>
              {task.nextExecutionAt && (
                <>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">下次执行</span>
                    <span className="text-sm">{formatDate(task.nextExecutionAt)}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
