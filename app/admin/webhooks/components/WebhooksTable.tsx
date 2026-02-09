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
import { MoreHorizontal, Edit, Trash2, Power, PowerOff } from 'lucide-react';
import { toast } from 'react-hot-toast';
import type { WebhookWithCount } from '../types';

interface WebhooksTableProps {
  webhooks: WebhookWithCount[];
  onRefetch: () => void;
}

export function WebhooksTable({ webhooks, onRefetch }: WebhooksTableProps) {
  const handleToggleStatus = async (webhook: WebhookWithCount) => {
    try {
      const res = await fetch(`/api/admin/webhooks/${webhook.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !webhook.isActive }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success(webhook.isActive ? 'Webhook 已禁用' : 'Webhook 已启用');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '操作失败');
    }
  };

  const handleDelete = async (webhook: WebhookWithCount) => {
    if (!confirm(`确定要删除 Webhook "${webhook.name}" 吗？`)) return;

    try {
      const res = await fetch(`/api/admin/webhooks/${webhook.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success('Webhook 删除成功');
      onRefetch();
    } catch (error: any) {
      toast.error(error.message || '删除失败');
    }
  };

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const maskWebhookUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return `${urlObj.origin}/...`;
    } catch {
      return url.substring(0, 30) + '...';
    }
  };

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名称</TableHead>
            <TableHead>Webhook URL</TableHead>
            <TableHead className="text-center">状态</TableHead>
            <TableHead className="text-center">关联任务</TableHead>
            <TableHead className="text-center">消息数</TableHead>
            <TableHead className="text-center">最后使用</TableHead>
            <TableHead className="text-center">创建时间</TableHead>
            <TableHead className="text-center">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {webhooks.map((webhook) => (
            <TableRow key={webhook.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{webhook.name}</div>
                  {webhook.description && (
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {webhook.description}
                    </div>
                  )}
                </div>
              </TableCell>

              <TableCell>
                <div className="font-mono text-xs text-muted-foreground">
                  {maskWebhookUrl(webhook.webhookUrl)}
                </div>
              </TableCell>

              <TableCell className="text-center">
                <Badge variant={webhook.isActive ? 'default' : 'secondary'}>
                  {webhook.isActive ? '启用' : '禁用'}
                </Badge>
              </TableCell>

              <TableCell className="text-center">
                <span className="font-medium">{webhook._count.tasks}</span>
              </TableCell>

              <TableCell className="text-center">
                <span className="text-muted-foreground">{webhook.messageCount}</span>
              </TableCell>

              <TableCell className="text-center text-xs text-muted-foreground">
                {webhook.lastUsedAt ? formatDate(webhook.lastUsedAt) : '-'}
              </TableCell>

              <TableCell className="text-center text-xs text-muted-foreground">
                {formatDate(webhook.createdAt)}
              </TableCell>

              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleToggleStatus(webhook)}>
                      {webhook.isActive ? (
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
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      编辑
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => handleDelete(webhook)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      删除
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
