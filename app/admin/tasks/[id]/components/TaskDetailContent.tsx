import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle,
  TrendingUp,
  Activity,
  Clock,
  Calendar,
  Bell,
} from 'lucide-react';
import type { SignalTask } from '../../types';
import { ModeBadge } from '../../components/ModeBadge';

interface TaskDetailContentProps {
  task: SignalTask;
}

export function TaskDetailContent({ task }: TaskDetailContentProps) {
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
    <div className="grid gap-6 md:grid-cols-2">
      {/* 错误信息 - 全宽 */}
      {task.status === 'ERROR' && task.errorMessage && (
        <div className="md:col-span-2">
          <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-destructive">任务执行错误</p>
              <p className="text-sm text-destructive/80 mt-1">{task.errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* 标的信息 */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          标的信息
        </h3>
        <div className="rounded-lg border bg-card p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">名称</span>
            <span className="font-medium">
              {task.market.displayName || task.market.name}
            </span>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">代码</span>
            <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
              {task.market.code}
            </code>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">交易符号</span>
            <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
              {task.market.symbol}
            </code>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">类型</span>
            <Badge variant="outline">{task.market.type}</Badge>
          </div>
        </div>
      </div>

      {/* 指标配置 */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5" />
          指标配置
        </h3>
        <div className="rounded-lg border bg-card p-4 space-y-3">
          <div>
            <span className="text-sm text-muted-foreground mb-2 block">关联指标</span>
            <div className="flex flex-wrap gap-2">
              {task.taskIndicators.map((ti: any, idx: number) => (
                <Badge key={idx} variant="secondary">
                  {ti.indicator.name}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">时间周期</span>
            <Badge variant="outline" className="font-mono">
              {task.timeframe}
            </Badge>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
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
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5" />
          执行统计
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="text-3xl font-bold text-primary">{task._count.executions}</div>
            <div className="text-sm text-muted-foreground mt-1">执行次数</div>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="text-sm font-medium">
              {formatDate(task.lastExecutedAt)}
            </div>
            <div className="text-sm text-muted-foreground mt-1">最后执行</div>
          </div>
        </div>
      </div>

      {/* 通知配置 */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5" />
          通知配置
        </h3>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">启用通知</span>
            <Badge 
              variant={task.enableNotification ? 'default' : 'secondary'}
              className={task.enableNotification ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' : ''}
            >
              {task.enableNotification ? '已启用' : '已禁用'}
            </Badge>
          </div>
        </div>
      </div>

      {/* 时间信息 - 全宽 */}
      <div className="space-y-3 md:col-span-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          时间信息
        </h3>
        <div className="rounded-lg border bg-card p-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <span className="text-sm text-muted-foreground block mb-1">创建时间</span>
              <span className="text-sm font-medium">{formatDate(task.createdAt)}</span>
            </div>
            <div>
              <span className="text-sm text-muted-foreground block mb-1">更新时间</span>
              <span className="text-sm font-medium">{formatDate(task.updatedAt)}</span>
            </div>
            {task.nextExecutionAt && (
              <div>
                <span className="text-sm text-muted-foreground block mb-1">下次执行</span>
                <span className="text-sm font-medium">{formatDate(task.nextExecutionAt)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
