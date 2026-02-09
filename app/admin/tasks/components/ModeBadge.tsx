import { Badge } from '@/components/ui/badge';
import { Activity, Clock } from 'lucide-react';

interface ModeBadgeProps {
  mode: 'REALTIME' | 'SCHEDULED';
}

const modeConfig = {
  REALTIME: {
    label: '实时监控',
    icon: Activity,
    className: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  },
  SCHEDULED: {
    label: '定时扫描',
    icon: Clock,
    className: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  },
};

export function ModeBadge({ mode }: ModeBadgeProps) {
  const config = modeConfig[mode];
  const Icon = config.icon;
  
  return (
    <Badge variant="outline" className={config.className}>
      <Icon className="mr-1 h-3 w-3" />
      {config.label}
    </Badge>
  );
}
