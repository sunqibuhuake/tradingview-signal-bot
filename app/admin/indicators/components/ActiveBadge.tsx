import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ActiveBadgeProps {
  isActive: boolean;
  onClick?: () => void;
}

export function ActiveBadge({ isActive, onClick }: ActiveBadgeProps) {
  return (
    <Badge
      onClick={onClick}
      className={cn(
        'text-xs font-medium cursor-pointer transition-colors',
        isActive
          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
          : 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20 hover:bg-gray-500/20'
      )}
    >
      {isActive ? '启用' : '禁用'}
    </Badge>
  );
}
