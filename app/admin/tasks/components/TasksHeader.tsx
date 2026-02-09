import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TasksHeaderProps {
  onCreateClick: () => void;
}

export function TasksHeader({ onCreateClick }: TasksHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">任务管理</h1>
        <p className="mt-2 text-muted-foreground">
          管理所有监控任务，包括实时监控和定时扫描任务
        </p>
      </div>
      <Button onClick={onCreateClick} size="default">
        <Plus className="mr-2 h-4 w-4" />
        创建任务
      </Button>
    </div>
  );
}
