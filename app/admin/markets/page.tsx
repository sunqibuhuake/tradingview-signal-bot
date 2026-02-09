'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import { EmptyState } from '@/app/components/EmptyState';
import { MarketsHeader } from './components/MarketsHeader';
import { MarketsTable } from './components/MarketsTable';
import { MarketsPagination } from './components/MarketsPagination';
import { CreateMarketDialog } from './components/CreateMarketDialog';
import { MarketDetailDialog } from './components/MarketDetailDialog';
import { Market, MarketsResponse } from './types';
import { Plus } from 'lucide-react';

export default function MarketsPage() {
  const [page, setPage] = useState(1);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [editMarket, setEditMarket] = useState<Market | null>(null);

  const { data, isLoading, refetch } = useQuery<MarketsResponse>({
    queryKey: ['markets', page],
    queryFn: async () => {
      const res = await fetch(`/api/admin/markets?page=${page}&limit=20`);
      if (!res.ok) throw new Error('Failed to fetch markets');
      return res.json();
    },
  });

  const handleEdit = (market: Market) => {
    setEditMarket(market);
    setShowCreateDialog(true);
  };

  const handleCloseDialog = () => {
    setShowCreateDialog(false);
    // Reset edit market after dialog closes
    setTimeout(() => setEditMarket(null), 200);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const hasMarkets = data?.markets && data.markets.length > 0;

  return (
    <div className="space-y-6">
      <MarketsHeader onCreateClick={() => setShowCreateDialog(true)} />

      {hasMarkets ? (
        <>
          <MarketsTable
            markets={data.markets}
            onRefetch={refetch}
            onViewDetail={setSelectedMarket}
            onEdit={handleEdit}
          />

          {data.pagination && data.pagination.totalPages > 1 && (
            <MarketsPagination
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
          title="暂无标的"
          description="开始添加您的第一个交易标的"
          action={
            <Button onClick={() => setShowCreateDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              添加标的
            </Button>
          }
        />
      )}

      <CreateMarketDialog
        open={showCreateDialog}
        onOpenChange={handleCloseDialog}
        onSuccess={refetch}
        editMarket={editMarket}
      />

      <MarketDetailDialog
        market={selectedMarket}
        open={!!selectedMarket}
        onOpenChange={(open) => !open && setSelectedMarket(null)}
      />
    </div>
  );
}
