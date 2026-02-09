'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WebhooksTable } from './components/WebhooksTable';
import { CreateWebhookDialog } from './components/CreateWebhookDialog';
import { WebhooksPagination } from './components/WebhooksPagination';
import type { WebhooksResponse } from './types';

export default function WebhooksPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const { data, isLoading, refetch } = useQuery<WebhooksResponse>({
    queryKey: ['webhooks', page, search],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        ...(search && { search }),
      });
      const res = await fetch(`/api/admin/webhooks?${params}`);
      if (!res.ok) throw new Error('Failed to fetch webhooks');
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-bold">钉钉 Webhook 管理</h1>
        <p className="text-muted-foreground mt-2">
          配置多个钉钉 Webhook，不同任务可发送到不同的钉钉群
        </p>
      </div>

      {/* 操作栏 */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-sm">
          <Input
            placeholder="搜索 Webhook 名称或描述..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          添加 Webhook
        </Button>
      </div>

      {/* Webhook 列表 */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-muted-foreground">加载中...</div>
        </div>
      ) : data?.webhooks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 border rounded-lg bg-muted/50">
          <p className="text-muted-foreground mb-4">暂无 Webhook 配置</p>
          <Button onClick={() => setCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            添加第一个 Webhook
          </Button>
        </div>
      ) : (
        <>
          <WebhooksTable webhooks={data?.webhooks || []} onRefetch={refetch} />
          {data && data.pagination.totalPages > 1 && (
            <WebhooksPagination
              currentPage={page}
              totalPages={data.pagination.totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}

      {/* 创建对话框 */}
      <CreateWebhookDialog
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
