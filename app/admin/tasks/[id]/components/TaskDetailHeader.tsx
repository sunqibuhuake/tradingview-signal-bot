import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, Trash2, Edit } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import type { SignalTask } from '../../types';
import { StatusBadge } from '../../components/StatusBadge';

interface TaskDetailHeaderProps {
  task: SignalTask;
  onRefetch: () => void;
  onBack: () => void;
}

export function TaskDetailHeader({ task, onRefetch, onBack }: TaskDetailHeaderProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/admin/tasks/${task.id}/edit`);
  };

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

  const handleDelete = async () => {
    if (!confirm('确定要删除这个任务吗？此操作不可撤销。')) return;

    try {
      const res = await fetch(`/api/admin/tasks/${task.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      toast.success('任务已删除');
      router.push('/admin/tasks');
    } catch (error: any) {
      toast.error(error.message || '删除失败');
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{task.name}</h1>
          {task.description && (
            <p className="mt-2 text-muted-foreground">{task.description}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <StatusBadge status={task.status} />
        
        <Button variant="outline" onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          编辑任务
        </Button>
        
        {task.status === 'ACTIVE' ? (
          <Button variant="outline" onClick={handleToggleStatus}>
            <Pause className="mr-2 h-4 w-4" />
            暂停任务
          </Button>
        ) : (
          <Button onClick={handleToggleStatus}>
            <Play className="mr-2 h-4 w-4" />
            启动任务
          </Button>
        )}
        
        <Button variant="destructive" onClick={handleDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          删除任务
        </Button>
      </div>
    </div>
  );
}
