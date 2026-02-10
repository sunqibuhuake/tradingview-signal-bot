'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'react-hot-toast';
import { Loader2, ArrowLeft } from 'lucide-react';
import { Market, Indicator, DingTalkWebhook } from '@/generated/prisma';
import type { SignalTask } from '../types';

// API 响应类型定义
interface PaginationResponse {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

interface MarketWithCount extends Market {
    _count: {
        tasks: number;
    };
}

interface MarketsResponse {
    markets: MarketWithCount[];
    pagination: PaginationResponse;
}

interface IndicatorWithCount extends Indicator {
    _count: {
        taskIndicators: number;
    };
}

interface IndicatorsResponse {
    indicators: IndicatorWithCount[];
    pagination: PaginationResponse;
}

interface WebhookWithCount extends DingTalkWebhook {
    _count: {
        tasks: number;
    };
}

interface WebhooksResponse {
    webhooks: WebhookWithCount[];
    pagination: PaginationResponse;
}

interface TaskFormProps {
    task?: SignalTask;
    mode: 'create' | 'edit';
}

export function TaskForm({ task, mode }: TaskFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: task?.name || '',
        description: task?.description || '',
        marketId: task?.marketId || '',
        indicatorId: task?.taskIndicators?.[0]?.indicatorId || '',
        dingTalkWebhookId: task?.dingTalkWebhookId || '',
        timeframe: task?.timeframe || 'M5',
        range: task?.range || 500,
        executionMode: (task?.executionMode || 'REALTIME') as 'REALTIME' | 'SCHEDULED',
        enableNotification: task?.enableNotification ?? true,
    });

    // 获取市场列表
    const { data: marketsData } = useQuery<MarketsResponse>({
        queryKey: ['markets'],
        queryFn: async () => {
            const res = await fetch('/api/admin/markets?limit=100&type=CRYPTO');
            if (!res.ok) throw new Error('Failed to fetch markets');
            return res.json();
        },
    });

    // 获取指标列表
    const { data: indicatorsData } = useQuery<IndicatorsResponse>({
        queryKey: ['indicators'],
        queryFn: async () => {
            const res = await fetch('/api/admin/indicators');
            if (!res.ok) throw new Error('Failed to fetch indicators');
            return res.json();
        },
    });

    // 获取 Webhook 列表
    const { data: webhooksData } = useQuery<WebhooksResponse>({
        queryKey: ['webhooks'],
        queryFn: async () => {
            const res = await fetch('/api/admin/webhooks?limit=100&isActive=true');
            if (!res.ok) throw new Error('Failed to fetch webhooks');
            return res.json();
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            toast.error('请输入任务名称');
            return;
        }

        if (!formData.marketId) {
            toast.error('请选择标的');
            return;
        }

        if (!formData.indicatorId) {
            toast.error('请选择指标');
            return;
        }

        setLoading(true);
        try {
            // API 期望 indicatorIds 是数组
            const payload = {
                ...formData,
                indicatorIds: [formData.indicatorId], // 转换为数组
                indicatorId: undefined, // 移除单个 indicatorId 字段
                // 如果 dingTalkWebhookId 为空字符串，转换为 null
                dingTalkWebhookId: formData.dingTalkWebhookId || null,
            };

            const url = mode === 'create' 
                ? '/api/admin/tasks'
                : `/api/admin/tasks/${task?.id}`;

            const method = mode === 'create' ? 'POST' : 'PATCH';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || `${mode === 'create' ? '创建' : '更新'}失败`);
            }

            const result = await res.json();
            toast.success(mode === 'create' ? '任务创建成功' : '任务更新成功');
            
            // 跳转到任务详情页
            router.push(`/admin/tasks/${result.id}`);
        } catch (error: any) {
            toast.error(error.message || `${mode === 'create' ? '创建' : '更新'}失败`);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        if (mode === 'edit' && task) {
            router.push(`/admin/tasks/${task.id}`);
        } else {
            router.push('/admin/tasks');
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={handleCancel}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {mode === 'create' ? '创建监控任务' : '编辑任务'}
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        {mode === 'create' 
                            ? '创建一个新的市场监控任务，系统将根据指标发送交易信号'
                            : '修改任务配置，更新后立即生效'}
                    </p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* 基本信息 */}
                <Card>
                    <CardHeader>
                        <CardTitle>基本信息</CardTitle>
                        <CardDescription>配置任务的基本信息和描述</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">任务名称 *</Label>
                            <Input
                                id="name"
                                placeholder="例如：BTC/USDT 实时监控"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">任务描述</Label>
                            <Textarea
                                id="description"
                                placeholder="描述任务的目的和策略..."
                                rows={3}
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                }
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* 标的与指标 */}
                <Card>
                    <CardHeader>
                        <CardTitle>标的与指标</CardTitle>
                        <CardDescription>选择要监控的市场标的和技术指标</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="market">选择标的 *</Label>
                                <Select
                                    value={formData.marketId}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, marketId: value })
                                    }
                                >
                                    <SelectTrigger id="market">
                                        <SelectValue placeholder="选择标的" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {marketsData?.markets?.map((market) => (
                                            <SelectItem key={market.id} value={market.id}>
                                                {market.displayName || market.name} ({market.code})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="indicator">选择指标 *</Label>
                                <Select
                                    value={formData.indicatorId}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, indicatorId: value })
                                    }
                                >
                                    <SelectTrigger id="indicator">
                                        <SelectValue placeholder="选择指标" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {indicatorsData?.indicators?.map((indicator) => (
                                            <SelectItem key={indicator.id} value={indicator.id}>
                                                {indicator.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 时间设置 */}
                <Card>
                    <CardHeader>
                        <CardTitle>时间设置</CardTitle>
                        <CardDescription>配置 K 线周期和数据范围</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="timeframe">时间周期</Label>
                                <Select
                                    value={formData.timeframe}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, timeframe: value  })
                                    }
                                >
                                    <SelectTrigger id="timeframe">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="M1">1分钟</SelectItem>
                                        <SelectItem value="M3">3分钟</SelectItem>
                                        <SelectItem value="M5">5分钟</SelectItem>
                                        <SelectItem value="M15">15分钟</SelectItem>
                                        <SelectItem value="M30">30分钟</SelectItem>
                                        <SelectItem value="M45">45分钟</SelectItem>
                                        <SelectItem value="H1">1小时</SelectItem>
                                        <SelectItem value="H2">2小时</SelectItem>
                                        <SelectItem value="H3">3小时</SelectItem>
                                        <SelectItem value="H4">4小时</SelectItem>
                                        <SelectItem value="D1">日线</SelectItem>
                                        <SelectItem value="W1">周线</SelectItem>
                                        <SelectItem value="MN1">月线</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="range">K线数量</Label>
                                <Input
                                    id="range"
                                    type="number"
                                    min={50}
                                    max={5000}
                                    value={formData.range}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            range: parseInt(e.target.value) || 500,
                                        })
                                    }
                                />
                                <p className="text-xs text-muted-foreground">
                                    指标计算所需的历史 K 线数量（50-5000）
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 执行模式 */}
                <Card>
                    <CardHeader>
                        <CardTitle>执行模式</CardTitle>
                        <CardDescription>选择任务的执行方式</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="executionMode">执行模式</Label>
                            <Select
                                value={formData.executionMode}
                                onValueChange={(value: any) =>
                                    setFormData({ ...formData, executionMode: value })
                                }
                            >
                                <SelectTrigger id="executionMode">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="REALTIME">实时监控（WebSocket）</SelectItem>
                                    <SelectItem value="SCHEDULED">定时扫描</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">
                                {formData.executionMode === 'REALTIME'
                                    ? '适合加密货币市场，建立持久连接实时监控价格变化'
                                    : '适合股票市场，按固定间隔定时检查信号'}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 通知设置 */}
                <Card>
                    <CardHeader>
                        <CardTitle>通知设置</CardTitle>
                        <CardDescription>配置信号通知方式</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="webhook">钉钉 Webhook</Label>
                            <Select
                                value={formData.dingTalkWebhookId || undefined}
                                onValueChange={(value) =>
                                    setFormData({ 
                                        ...formData, 
                                        dingTalkWebhookId: value === '__none__' ? '' : value 
                                    })
                                }
                            >
                                <SelectTrigger id="webhook">
                                    <SelectValue placeholder="选择通知目标" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="__none__">不使用 Webhook</SelectItem>
                                    {webhooksData?.webhooks?.map((webhook) => (
                                        <SelectItem key={webhook.id} value={webhook.id}>
                                            {webhook.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">
                                选择接收信号通知的钉钉群，未选择则使用环境变量配置
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label htmlFor="notification" className="text-base">
                                    启用通知
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                    检测到交易信号时发送通知到钉钉
                                </p>
                            </div>
                            <Switch
                                id="notification"
                                checked={formData.enableNotification}
                                onCheckedChange={(checked) =>
                                    setFormData({ ...formData, enableNotification: checked })
                                }
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* 操作按钮 */}
                <div className="flex justify-end gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancel}
                        disabled={loading}
                    >
                        取消
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {mode === 'create' ? '创建任务' : '保存更改'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
