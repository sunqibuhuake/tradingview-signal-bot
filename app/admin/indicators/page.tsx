'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import { EmptyState } from '@/app/components/EmptyState';
import { IndicatorsHeader } from './components/IndicatorsHeader';
import { IndicatorsTable } from './components/IndicatorsTable';
import { IndicatorsPagination } from './components/IndicatorsPagination';
import { CreateIndicatorDialog } from './components/CreateIndicatorDialog';
import { EditIndicatorDialog } from './components/EditIndicatorDialog';
import { IndicatorDetailDialog } from './components/IndicatorDetailDialog';
import { Indicator, IndicatorsResponse } from './types';
import { Plus } from 'lucide-react';

export default function IndicatorsPage() {
  const [page, setPage] = useState(1);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingIndicator, setEditingIndicator] = useState<Indicator | null>(null);
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(null);

  const { data, isLoading, refetch } = useQuery<IndicatorsResponse>({
    queryKey: ['indicators', page],
    queryFn: async () => {
      const res = await fetch(`/api/admin/indicators?page=${page}&limit=20`);
      if (!res.ok) throw new Error('Failed to fetch indicators');
      return res.json();
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const hasIndicators = data?.indicators && data.indicators.length > 0;

  return (
    <div className="space-y-6">
      <IndicatorsHeader onCreateClick={() => setShowCreateDialog(true)} />

      {hasIndicators ? (
        <>
          <IndicatorsTable
            indicators={data.indicators}
            onRefetch={refetch}
            onViewDetail={setSelectedIndicator}
            onEdit={setEditingIndicator}
          />

          {data.pagination && data.pagination.totalPages > 1 && (
            <IndicatorsPagination
              currentPage={data.pagination.currentPage}
              totalPages={data.pagination.totalPages}
              total={data.pagination.total}
              limit={data.pagination.limit}
              onPageChange={setPage}
            />
          )}
        </>
      ) : (
        <EmptyState
          icon="trending"
          title="暂无指标"
          description="开始添加您的第一个 TradingView 指标"
          action={
            <Button onClick={() => setShowCreateDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              添加指标
            </Button>
          }
        />
      )}

      <CreateIndicatorDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onSuccess={refetch}
      />

      <EditIndicatorDialog
        indicator={editingIndicator}
        open={!!editingIndicator}
        onOpenChange={(open) => !open && setEditingIndicator(null)}
        onSuccess={refetch}
      />

      <IndicatorDetailDialog
        indicator={selectedIndicator}
        open={!!selectedIndicator}
        onOpenChange={(open) => !open && setSelectedIndicator(null)}
      />
    </div>
  );
}
