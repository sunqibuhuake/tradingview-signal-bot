'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TradingViewConfigTable } from './components/TradingViewConfigTable';
import { CreateConfigDialog } from './components/CreateConfigDialog';
import { TradingViewConfigsPagination } from './components/TradingViewConfigsPagination';
import type { TradingViewConfigsResponse } from './types';

export default function TradingViewConfigPage() {
  const [page, setPage] = useState(1);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const { data, isLoading, refetch } = useQuery<TradingViewConfigsResponse>({
    queryKey: ['tradingview-configs', page],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });
      const res = await fetch(`/api/admin/tradingview-config?${params}`);
      if (!res.ok) throw new Error('Failed to fetch configs');
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-bold">TradingView 配置管理</h1>
        <p className="text-muted-foreground mt-2">
          管理 TradingView SESSION 和 SIGNATURE 配置，支持多账号切换
        </p>
      </div>

      {/* 操作栏 */}
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          配置优先级：主配置 &gt; 环境变量
        </div>

        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          添加配置
        </Button>
      </div>

      {/* 配置列表 */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-muted-foreground">加载中...</div>
        </div>
      ) : data?.configs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 border rounded-lg bg-muted/50">
          <p className="text-muted-foreground mb-4">暂无 TradingView 配置</p>
          <Button onClick={() => setCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            添加第一个配置
          </Button>
        </div>
      ) : (
        <>
          <TradingViewConfigTable configs={data?.configs || []} onRefetch={refetch} />
          {data && data.pagination.totalPages > 1 && (
            <TradingViewConfigsPagination
              currentPage={page}
              totalPages={data.pagination.totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}

      {/* 创建对话框 */}
      <CreateConfigDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSuccess={() => {
          refetch();
          setCreateDialogOpen(false);
        }}
      />
    </div>
  );
}
