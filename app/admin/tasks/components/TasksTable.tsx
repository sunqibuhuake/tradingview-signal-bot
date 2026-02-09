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
import { MoreHorizontal, Play, Pause, Eye, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import type { SignalTask } from '../types';
import { StatusBadge } from './StatusBadge';
import { ModeBadge } from './ModeBadge';

interface TasksTableProps {
  tasks: SignalTask[];
  onRefetch: () => void;
}

export function TasksTable({ tasks, onRefetch }: TasksTableProps) {
  const router = useRouter();
  const handleToggleStatus = async (task: SignalTask) => {
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

  const handleDelete = async (task: SignalTask) => {
    if (!confirm(`确定要删除任务 "${task.name}" 吗？`)) return;

    try {
      const res = await fetch(`/api/admin/tasks/${task.id}`, {
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

  const formatDate = (dateString?: string | Date | null) => {
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

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">任务名称</TableHead>
            <TableHead>标的</TableHead>
            <TableHead>指标</TableHead>
            <TableHead className="text-center">周期</TableHead>
            <TableHead className="text-center">模式</TableHead>
            <TableHead className="text-center">执行次数</TableHead>
            <TableHead className="text-center">最后执行</TableHead>
            <TableHead className="text-center">状态</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className="group">
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{task.name}</div>
                  {task.description && (
                    <div className="text-xs text-muted-foreground line-clamp-1">
                      {task.description}
                    </div>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-sm">
                    {task.market.displayName || task.market.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {task.market.symbol}
                  </div>
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {task.taskIndicators.slice(0, 2).map((ti: any, idx: number) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {ti.indicator.name}
                    </Badge>
                  ))}
                  {task.taskIndicators.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{task.taskIndicators.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              
              <TableCell className="text-center">
                <Badge variant="outline" className="font-mono text-xs">
                  {task.timeframe}
                </Badge>
              </TableCell>
              
              <TableCell className="text-center">
                <ModeBadge mode={task.executionMode} />
              </TableCell>
              
              <TableCell className="text-center">
                <span className="font-medium">{task._count.executions}</span>
              </TableCell>
              
              <TableCell className="text-center text-xs text-muted-foreground">
                {formatDate(task.lastExecutedAt)}
              </TableCell>
              
              <TableCell className="text-center">
                <StatusBadge status={task.status} />
              </TableCell>
              
              <TableCell>
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
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push(`/admin/tasks/${task.id}`)}>
                      <Eye className="mr-2 h-4 w-4" />
                      查看详情
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleToggleStatus(task)}>
                      {task.status === 'ACTIVE' ? (
                        <>
                          <Pause className="mr-2 h-4 w-4" />
                          暂停任务
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          启动任务
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleDelete(task)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      删除任务
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
