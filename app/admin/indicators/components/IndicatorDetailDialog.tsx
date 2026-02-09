import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, User, Hash, Code2, FileCode, Eye, EyeOff, Globe, Lock } from 'lucide-react';
import { Indicator } from '../types';
import { ActiveBadge } from './ActiveBadge';

interface IndicatorDetailDialogProps {
  indicator: Indicator | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function IndicatorDetailDialog({
  indicator,
  open,
  onOpenChange,
}: IndicatorDetailDialogProps) {
  if (!indicator) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{indicator.name}</DialogTitle>
          <DialogDescription>
            指标详细信息和配置
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Basic Information */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              基本信息
            </h3>
            <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Code2 className="h-3 w-3" />
                    TradingView ID
                  </div>
                  <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                    {indicator.tradingViewId}
                  </code>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Hash className="h-3 w-3" />
                    版本
                  </div>
                  <div className="text-sm font-medium">{indicator.version}</div>
                </div>
              </div>

              {indicator.author && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <User className="h-3 w-3" />
                    作者
                  </div>
                  <div className="text-sm font-medium">{indicator.author}</div>
                </div>
              )}

              {indicator.description && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">描述</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {indicator.description}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Output Fields */}
          <div>
            <h3 className="text-sm font-semibold mb-3">输出字段</h3>
            <div className="rounded-lg border bg-muted/30 p-4">
              <div className="flex flex-wrap gap-2">
                {Object.entries(indicator.outputFields).map(([key, value]) => (
                  <Badge
                    key={key}
                    variant="secondary"
                    className="text-sm bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                  >
                    <Code2 className="h-3 w-3 mr-1" />
                    {key}
                    {key !== value && (
                      <span className="ml-1 text-muted-foreground">→ {value}</span>
                    )}
                  </Badge>
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-3">
                共 {Object.keys(indicator.outputFields).length} 个输出字段
              </div>
            </div>
          </div>

          <Separator />

          {/* Status and Statistics */}
          <div>
            <h3 className="text-sm font-semibold mb-3">状态与统计</h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  {indicator.isActive ? (
                    <Eye className="h-3 w-3" />
                  ) : (
                    <EyeOff className="h-3 w-3" />
                  )}
                  启用状态
                </div>
                <ActiveBadge isActive={indicator.isActive} />
              </div>

              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  {indicator.isPublic ? (
                    <Globe className="h-3 w-3" />
                  ) : (
                    <Lock className="h-3 w-3" />
                  )}
                  公开状态
                </div>
                <Badge
                  className={
                    indicator.isPublic
                      ? 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
                      : 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20'
                  }
                >
                  {indicator.isPublic ? '公开' : '私有'}
                </Badge>
              </div>

              <div className="rounded-lg border bg-muted/30 p-4 md:col-span-2">
                <div className="text-xs text-muted-foreground mb-2">使用统计</div>
                <div className="text-2xl font-bold">
                  {indicator._count.taskIndicators}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  个任务正在使用此指标
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Time Information */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              时间信息
            </h3>
            <div className="rounded-lg border bg-muted/30 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">创建时间</span>
                <span className="text-sm font-medium">
                  {formatDate(indicator.createdAt)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">更新时间</span>
                <span className="text-sm font-medium">
                  {formatDate(indicator.updatedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
