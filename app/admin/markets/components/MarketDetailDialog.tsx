import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Building2, Code2, Hash, FileText, Activity } from 'lucide-react';
import { Market } from '../types';
import { TypeBadge } from './TypeBadge';
import { ActiveBadge } from '@/app/admin/indicators/components/ActiveBadge';

interface MarketDetailDialogProps {
  market: Market | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MarketDetailDialog({
  market,
  open,
  onOpenChange,
}: MarketDetailDialogProps) {
  if (!market) return null;

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
          <DialogTitle className="text-2xl">{market.name}</DialogTitle>
          <DialogDescription>
            标的详细信息和配置
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Basic Information */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              基本信息
            </h3>
            <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Code2 className="h-3 w-3" />
                    标的代码
                  </div>
                  <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                    {market.code}
                  </code>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Hash className="h-3 w-3" />
                    交易符号
                  </div>
                  <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                    {market.symbol}
                  </code>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">标的类型</div>
                  <TypeBadge type={market.type} />
                </div>
                {market.exchange && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      交易所
                    </div>
                    <div className="text-sm font-medium">{market.exchange}</div>
                  </div>
                )}
              </div>

              {market.displayName && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">显示名称</div>
                  <div className="text-sm font-medium">{market.displayName}</div>
                </div>
              )}

              {market.description && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">描述</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {market.description}
                  </div>
                </div>
              )}

              {market.icon && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">图标</div>
                  <div className="flex items-center gap-2">
                    <img src={market.icon} alt={market.name} className="h-8 w-8 rounded" />
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {market.icon}
                    </code>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Status and Statistics */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Activity className="h-4 w-4" />
              状态与统计
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="text-xs text-muted-foreground mb-2">启用状态</div>
                <ActiveBadge isActive={market.isActive} />
              </div>

              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="text-xs text-muted-foreground mb-2">关联任务数</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">
                    {market._count.tasks}
                  </div>
                  <span className="text-xs text-muted-foreground">个任务</span>
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
                  {formatDate(market.createdAt)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">更新时间</span>
                <span className="text-sm font-medium">
                  {formatDate(market.updatedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
