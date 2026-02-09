import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface MarketsHeaderProps {
  onCreateClick: () => void;
}

export function MarketsHeader({ onCreateClick }: MarketsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">标的管理</h1>
        <p className="mt-2 text-muted-foreground">
          管理所有交易标的，包括 A股、加密货币、美股等
        </p>
      </div>
      <Button onClick={onCreateClick} size="default">
        <Plus className="mr-2 h-4 w-4" />
        添加标的
      </Button>
    </div>
  );
}
