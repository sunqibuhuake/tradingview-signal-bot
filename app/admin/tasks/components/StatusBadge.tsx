import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'ACTIVE' | 'PAUSED' | 'STOPPED' | 'ERROR';
}

const statusConfig = {
  ACTIVE: {
    label: '运行中',
    variant: 'default' as const,
    className: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20',
  },
  PAUSED: {
    label: '已暂停',
    variant: 'secondary' as const,
    className: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  },
  STOPPED: {
    label: '已停止',
    variant: 'outline' as const,
    className: 'text-muted-foreground',
  },
  ERROR: {
    label: '错误',
    variant: 'destructive' as const,
    className: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge 
      variant={config.variant}
      className={cn('text-xs font-medium', config.className)}
    >
      {config.label}
    </Badge>
  );
}
