import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TypeBadgeProps {
  type: string;
}

const typeConfig: Record<string, { label: string; className: string }> = {
  'CN_STOCK': {
    label: 'A股',
    className: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  },
  'CRYPTO': {
    label: '加密货币',
    className: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
  },
  'US_STOCK': {
    label: '美股',
    className: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  },
  'HK_STOCK': {
    label: '港股',
    className: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  },
  'FOREX': {
    label: '外汇',
    className: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  },
  'FUTURES': {
    label: '期货',
    className: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  },
};

export function TypeBadge({ type }: TypeBadgeProps) {
  const config = typeConfig[type] || {
    label: type,
    className: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20',
  };

  return (
    <Badge variant="outline" className={cn('text-xs font-medium', config.className)}>
      {config.label}
    </Badge>
  );
}
