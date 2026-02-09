import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface IndicatorsHeaderProps {
  onCreateClick: () => void;
}

export function IndicatorsHeader({ onCreateClick }: IndicatorsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">指标管理</h1>
        <p className="mt-2 text-muted-foreground">
          管理所有 TradingView 自定义指标
        </p>
      </div>
      <Button onClick={onCreateClick} size="default">
        <Plus className="mr-2 h-4 w-4" />
        添加指标
      </Button>
    </div>
  );
}
