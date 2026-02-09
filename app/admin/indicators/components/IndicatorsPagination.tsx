import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface IndicatorsPaginationProps {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export function IndicatorsPagination({
  currentPage,
  totalPages,
  total,
  limit,
  onPageChange,
}: IndicatorsPaginationProps) {
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  return (
    <div className="flex items-center justify-between rounded-lg border bg-card px-4 py-3">
      <div className="text-sm text-muted-foreground">
        显示 <span className="font-medium text-foreground">{start}</span> 到{' '}
        <span className="font-medium text-foreground">{end}</span> 共{' '}
        <span className="font-medium text-foreground">{total}</span> 条
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          上一页
        </Button>
        <div className="text-sm font-medium px-2">
          {currentPage} / {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          下一页
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
