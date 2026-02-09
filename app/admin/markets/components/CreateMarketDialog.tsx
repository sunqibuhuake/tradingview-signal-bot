import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Market } from '../types';
import toast from 'react-hot-toast';

interface CreateMarketDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  editMarket?: Market | null;
}

interface FormData {
  name: string;
  code: string;
  symbol: string;
  type: string;
  exchange: string;
  description: string;
  icon: string;
  displayName: string;
  isActive: boolean;
}

const marketTypes = [
  { value: 'CN_STOCK', label: 'A股' },
  { value: 'CRYPTO', label: '加密货币' },
  { value: 'US_STOCK', label: '美股' },
  { value: 'HK_STOCK', label: '港股' },
  { value: 'FOREX', label: '外汇' },
  { value: 'FUTURES', label: '期货' },
];

export function CreateMarketDialog({
  open,
  onOpenChange,
  onSuccess,
  editMarket,
}: CreateMarketDialogProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    code: '',
    symbol: '',
    type: 'CN_STOCK',
    exchange: '',
    description: '',
    icon: '',
    displayName: '',
    isActive: true,
  });

  useEffect(() => {
    if (editMarket) {
      setFormData({
        name: editMarket.name,
        code: editMarket.code,
        symbol: editMarket.symbol,
        type: editMarket.type,
        exchange: editMarket.exchange || '',
        description: editMarket.description || '',
        icon: editMarket.icon || '',
        displayName: editMarket.displayName || '',
        isActive: editMarket.isActive,
      });
    } else {
      // Reset form when not editing
      setFormData({
        name: '',
        code: '',
        symbol: '',
        type: 'CN_STOCK',
        exchange: '',
        description: '',
        icon: '',
        displayName: '',
        isActive: true,
      });
    }
  }, [editMarket, open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('请输入标的名称');
      return;
    }

    if (!formData.code.trim()) {
      toast.error('请输入标的代码');
      return;
    }

    if (!formData.symbol.trim()) {
      toast.error('请输入交易符号');
      return;
    }

    setLoading(true);
    try {
      const url = editMarket
        ? `/api/admin/markets/${editMarket.id}`
        : '/api/admin/markets';
      const method = editMarket ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || `${editMarket ? '更新' : '创建'}失败`);
      }

      toast.success(`标的${editMarket ? '更新' : '创建'}成功`);
      onSuccess();
      onOpenChange(false);
    } catch (error: any) {
      toast.error(error.message || `${editMarket ? '更新' : '创建'}失败`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editMarket ? '编辑标的' : '添加标的'}</DialogTitle>
          <DialogDescription>
            {editMarket ? '修改交易标的信息' : '添加新的交易标的到系统中'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                标的名称 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="例如：贵州茅台"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">
                标的代码 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                placeholder="例如：600519"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="symbol">
                交易符号 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="symbol"
                value={formData.symbol}
                onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                placeholder="例如：SSE:600519"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">
                标的类型 <span className="text-destructive">*</span>
              </Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="选择类型" />
                </SelectTrigger>
                <SelectContent>
                  {marketTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="exchange">交易所</Label>
              <Input
                id="exchange"
                value={formData.exchange}
                onChange={(e) => setFormData({ ...formData, exchange: e.target.value })}
                placeholder="例如：上海证券交易所"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="displayName">显示名称</Label>
              <Input
                id="displayName"
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                placeholder="自定义显示名称"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">描述</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="简要描述该标的"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon">图标 URL</Label>
            <Input
              id="icon"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="标的图标 URL（可选）"
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="isActive">启用状态</Label>
              <p className="text-sm text-muted-foreground">
                启用后该标的可以被任务使用
              </p>
            </div>
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, isActive: checked })
              }
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              取消
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? `${editMarket ? '更新' : '创建'}中...` : `${editMarket ? '更新' : '创建'}标的`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
