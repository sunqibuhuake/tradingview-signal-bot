import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Trash2, MoreHorizontal, Power, PowerOff } from 'lucide-react';
import { Indicator } from '../types';
import { ActiveBadge } from './ActiveBadge';
import toast from 'react-hot-toast';

interface IndicatorsTableProps {
  indicators: Indicator[];
  onRefetch: () => void;
  onViewDetail: (indicator: Indicator) => void;
}

export function IndicatorsTable({ indicators, onRefetch, onViewDetail }: IndicatorsTableProps) {
  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const res = await fetch(`/api/admin/indicators/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (!res.ok) throw new Error('Failed to update indicator');

      toast.success('状态更新成功');
      onRefetch();
    } catch (error) {
      toast.error('状态更新失败');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个指标吗？此操作不可撤销。')) return;

    try {
      const res = await fetch(`/api/admin/indicators/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success('删除成功');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '删除失败');
    }
  };

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[280px]">指标名称</TableHead>
            <TableHead className="w-[200px]">TradingView ID</TableHead>
            <TableHead className="w-[100px]">版本</TableHead>
            <TableHead className="w-[240px]">输出字段</TableHead>
            <TableHead className="w-[100px] text-center">使用次数</TableHead>
            <TableHead className="w-[140px]">状态</TableHead>
            <TableHead className="w-[80px] text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {indicators.map((indicator) => (
            <tr key={indicator.id} className="group border-b last:border-0 hover:bg-muted/50 transition-colors">
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{indicator.name}</div>
                  {indicator.description && (
                    <div className="text-xs text-muted-foreground line-clamp-1 max-w-[260px]">
                      {indicator.description}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                  {indicator.tradingViewId}
                </code>
              </TableCell>
              <TableCell>
                <span className="text-sm text-muted-foreground">{indicator.version}</span>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {Object.keys(indicator.outputFields).slice(0, 3).map((field) => (
                    <Badge
                      key={field}
                      variant="secondary"
                      className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      {field}
                    </Badge>
                  ))}
                  {Object.keys(indicator.outputFields).length > 3 && (
                    <span className="text-xs text-muted-foreground self-center">
                      +{Object.keys(indicator.outputFields).length - 3}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-sm font-medium">{indicator._count.taskIndicators}</span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <ActiveBadge
                    isActive={indicator.isActive}
                    onClick={() => handleToggleActive(indicator.id, indicator.isActive)}
                  />
                  {indicator.isPublic && (
                    <Badge className="text-xs bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20">
                      公开
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">打开菜单</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuItem onClick={() => onViewDetail(indicator)}>
                      <Eye className="mr-2 h-4 w-4" />
                      查看详情
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleToggleActive(indicator.id, indicator.isActive)}>
                      {indicator.isActive ? (
                        <>
                          <PowerOff className="mr-2 h-4 w-4" />
                          禁用指标
                        </>
                      ) : (
                        <>
                          <Power className="mr-2 h-4 w-4" />
                          启用指标
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDelete(indicator.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      删除
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
