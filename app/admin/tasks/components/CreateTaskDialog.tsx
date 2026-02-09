import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
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
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { Market, Indicator, DingTalkWebhook } from '@/generated/prisma';

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

interface CreateTaskDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess: () => void;
}

export function CreateTaskDialog({
    open,
    onOpenChange,
    onSuccess,
}: CreateTaskDialogProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        marketId: '',
        indicatorId: '',
        dingTalkWebhookId: '',
        timeframe: 'M5',
        range: 500,
        executionMode: 'REALTIME' as 'REALTIME' | 'SCHEDULED',
        enableNotification: true,
    });

    // 获取市场列表
    const { data: marketsData } = useQuery<MarketsResponse>({
        queryKey: ['markets'],
        queryFn: async () => {
            const res = await fetch('/api/admin/markets?limit=100&type=CRYPTO');
            if (!res.ok) throw new Error('Failed to fetch markets');
            return res.json();
        },
        enabled: open,
    });

    // 获取指标列表
    const { data: indicatorsData } = useQuery<IndicatorsResponse>({
        queryKey: ['indicators'],
        queryFn: async () => {
            const res = await fetch('/api/admin/indicators');
            if (!res.ok) throw new Error('Failed to fetch indicators');
            return res.json();
        },
        enabled: open,
    });

    // 获取 Webhook 列表
    const { data: webhooksData } = useQuery<WebhooksResponse>({
        queryKey: ['webhooks'],
        queryFn: async () => {
            const res = await fetch('/api/admin/webhooks?limit=100&isActive=true');
            if (!res.ok) throw new Error('Failed to fetch webhooks');
            return res.json();
        },
        enabled: open,
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
            };

            const res = await fetch('/api/admin/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || '创建失败');
            }

            toast.success('任务创建成功');
            onSuccess();
            resetForm();
        } catch (error: any) {
            toast.error(error.message || '创建失败');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            description: '',
            marketId: '',
            indicatorId: '',
            dingTalkWebhookId: '',
            timeframe: 'M5',
            range: 500,
            executionMode: 'REALTIME',
            enableNotification: true,
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>创建监控任务</DialogTitle>
                    <DialogDescription>
                        创建一个新的市场监控任务，系统将根据指标发送交易信号
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        {/* 任务名称 */}
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

                        {/* 任务描述 */}
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

                        <div className="grid grid-cols-2 gap-4">
                            {/* 选择标的 */}
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

                            {/* 选择指标 */}
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

                        <div className="grid grid-cols-2 gap-4">
                            {/* 时间周期 */}
                            <div className="space-y-2">
                                <Label htmlFor="timeframe">时间周期</Label>
                                <Select
                                    value={formData.timeframe}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, timeframe: value })
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

                            {/* K线数量 */}
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
                            </div>
                        </div>

                        {/* 执行模式 */}
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

                        {/* 钉钉 Webhook */}
                        <div className="space-y-2">
                            <Label htmlFor="webhook">钉钉 Webhook</Label>
                            <Select
                                value={formData.dingTalkWebhookId}
                                onValueChange={(value) =>
                                    setFormData({ ...formData, dingTalkWebhookId: value })
                                }
                            >
                                <SelectTrigger id="webhook">
                                    <SelectValue placeholder="选择通知目标（可选）" />
                                </SelectTrigger>
                                <SelectContent>
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

                        {/* 启用通知 */}
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
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={loading}
                        >
                            取消
                        </Button>
                        <Button type="submit" disabled={loading}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            创建任务
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
