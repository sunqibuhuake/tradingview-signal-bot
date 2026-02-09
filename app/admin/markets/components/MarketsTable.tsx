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
import { Eye, Trash2, MoreHorizontal, Power, PowerOff, Edit } from 'lucide-react';
import { Market } from '../types';
import { TypeBadge } from './TypeBadge';
import { ActiveBadge } from '@/app/admin/indicators/components/ActiveBadge';
import toast from 'react-hot-toast';

interface MarketsTableProps {
  markets: Market[];
  onRefetch: () => void;
  onViewDetail: (market: Market) => void;
  onEdit: (market: Market) => void;
}

export function MarketsTable({ markets, onRefetch, onViewDetail, onEdit }: MarketsTableProps) {
  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const res = await fetch(`/api/admin/markets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (!res.ok) throw new Error('Failed to update market');

      toast.success('状态更新成功');
      onRefetch();
    } catch (error) {
      toast.error('状态更新失败');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个标的吗？此操作不可撤销。')) return;

    try {
      const res = await fetch(`/api/admin/markets/${id}`, {
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
            <TableHead className="w-[200px]">名称</TableHead>
            <TableHead className="w-[120px]">代码</TableHead>
            <TableHead className="w-[100px]">类型</TableHead>
            <TableHead className="w-[120px]">交易所</TableHead>
            <TableHead className="w-[100px] text-center">任务数</TableHead>
            <TableHead className="w-[100px]">状态</TableHead>
            <TableHead className="w-[80px] text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {markets.map((market) => (
            <tr key={market.id} className="group border-b last:border-0 hover:bg-muted/50 transition-colors">
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{market.name}</div>
                  {market.description && (
                    <div className="text-xs text-muted-foreground line-clamp-1 max-w-[180px]">
                      {market.description}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                  {market.code}
                </code>
              </TableCell>
              <TableCell>
                <TypeBadge type={market.type} />
              </TableCell>
              <TableCell>
                <span className="text-sm text-muted-foreground">
                  {market.exchange || '-'}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant="secondary" className="font-medium">
                  {market._count.tasks}
                </Badge>
              </TableCell>
              <TableCell>
                <ActiveBadge
                  isActive={market.isActive}
                  onClick={() => handleToggleActive(market.id, market.isActive)}
                />
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
                    <DropdownMenuItem onClick={() => onViewDetail(market)}>
                      <Eye className="mr-2 h-4 w-4" />
                      查看详情
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit(market)}>
                      <Edit className="mr-2 h-4 w-4" />
                      编辑
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleToggleActive(market.id, market.isActive)}>
                      {market.isActive ? (
                        <>
                          <PowerOff className="mr-2 h-4 w-4" />
                          禁用标的
                        </>
                      ) : (
                        <>
                          <Power className="mr-2 h-4 w-4" />
                          启用标的
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDelete(market.id)}
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
