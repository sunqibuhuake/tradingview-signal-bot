import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2, Star, StarOff, Power, PowerOff } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { CreateConfigDialog } from './CreateConfigDialog';
import type { TradingViewConfigType } from '../types';

interface TradingViewConfigTableProps {
  configs: TradingViewConfigType[];
  onRefetch: () => void;
}

export function TradingViewConfigTable({ configs, onRefetch }: TradingViewConfigTableProps) {
  const [editingConfig, setEditingConfig] = useState<TradingViewConfigType | null>(null);

  const handleSetPrimary = async (config: TradingViewConfigType) => {
    try {
      const res = await fetch(`/api/admin/tradingview-config/${config.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPrimary: true }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success('已设置为主配置');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '操作失败');
    }
  };

  const handleToggleStatus = async (config: TradingViewConfigType) => {
    try {
      const res = await fetch(`/api/admin/tradingview-config/${config.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !config.isActive }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success(config.isActive ? '配置已禁用' : '配置已启用');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '操作失败');
    }
  };

  const handleEdit = (config: TradingViewConfigType) => {
    setEditingConfig(config);
  };

  const handleDelete = async (config: TradingViewConfigType) => {
    if (!confirm(`确定要删除配置 "${config.name}" 吗？`)) return;

    try {
      const res = await fetch(`/api/admin/tradingview-config/${config.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success('配置删除成功');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '删除失败');
    }
  };

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return '-';
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const maskCredential = (value: string) => {
    if (value.length <= 8) return '****';
    return value.substring(0, 4) + '****' + value.substring(value.length - 4);
  };

  return (
    <>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>配置名称</TableHead>
              <TableHead>SESSION</TableHead>
              <TableHead>SIGNATURE</TableHead>
              <TableHead className="text-center">状态</TableHead>
              <TableHead className="text-center">最后使用</TableHead>
              <TableHead className="text-center">创建时间</TableHead>
              <TableHead className="text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {configs.map((config) => (
              <TableRow key={config.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {config.isPrimary && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                    <div>
                      <div className="font-medium">{config.name}</div>
                      {config.description && (
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {config.description}
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="font-mono text-xs text-muted-foreground">
                    {maskCredential(config.session)}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="font-mono text-xs text-muted-foreground">
                    {maskCredential(config.signature)}
                  </div>
                </TableCell>

                <TableCell className="text-center">
                  <Badge variant={config.isActive ? 'default' : 'secondary'}>
                    {config.isActive ? '启用' : '禁用'}
                  </Badge>
                </TableCell>

                <TableCell className="text-center text-xs text-muted-foreground">
                  {formatDate(config.lastUsedAt)}
                </TableCell>

                <TableCell className="text-center text-xs text-muted-foreground">
                  {formatDate(config.createdAt)}
                </TableCell>

                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {!config.isPrimary && (
                        <>
                          <DropdownMenuItem onClick={() => handleSetPrimary(config)}>
                            <Star className="mr-2 h-4 w-4" />
                            设为主配置
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </>
                      )}
                      <DropdownMenuItem onClick={() => handleToggleStatus(config)}>
                        {config.isActive ? (
                          <>
                            <PowerOff className="mr-2 h-4 w-4" />
                            禁用
                          </>
                        ) : (
                          <>
                            <Power className="mr-2 h-4 w-4" />
                            启用
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(config)}>
                        <Edit className="mr-2 h-4 w-4" />
                        编辑
                      </DropdownMenuItem>
                      {!config.isPrimary && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => handleDelete(config)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            删除
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 编辑对话框 */}
      <CreateConfigDialog
        open={!!editingConfig}
        onOpenChange={(open) => !open && setEditingConfig(null)}
        onSuccess={() => {
          setEditingConfig(null);
          onRefetch();
        }}
        config={editingConfig || undefined}
      />
    </>
  );
}
