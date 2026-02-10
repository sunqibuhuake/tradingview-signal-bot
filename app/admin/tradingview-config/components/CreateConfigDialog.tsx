import { useState, useEffect } from 'react';
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
import { Switch } from '@/components/ui/switch';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import type { TradingViewConfigType } from '../types';

interface CreateConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  config?: TradingViewConfigType;
}

export function CreateConfigDialog({
  open,
  onOpenChange,
  onSuccess,
  config,
}: CreateConfigDialogProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    session: '',
    signature: '',
    isActive: true,
    isPrimary: false,
  });

  const isEditMode = !!config;

  useEffect(() => {
    if (config) {
      setFormData({
        name: config.name,
        description: config.description || '',
        session: config.session,
        signature: config.signature,
        isActive: config.isActive,
        isPrimary: config.isPrimary,
      });
    } else {
      resetForm();
    }
  }, [config, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('请输入配置名称');
      return;
    }

    if (!formData.session.trim()) {
      toast.error('请输入 SESSION');
      return;
    }

    if (!formData.signature.trim()) {
      toast.error('请输入 SIGNATURE');
      return;
    }

    setLoading(true);
    try {
      const url = isEditMode
        ? `/api/admin/tradingview-config/${config.id}`
        : '/api/admin/tradingview-config';

      const method = isEditMode ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || `${isEditMode ? '更新' : '创建'}失败`);
      }

      toast.success(`配置${isEditMode ? '更新' : '创建'}成功`);
      onSuccess();
      if (!isEditMode) {
        resetForm();
      }
    } catch (error: any) {
      toast.error(error.message || `${isEditMode ? '更新' : '创建'}失败`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      session: '',
      signature: '',
      isActive: true,
      isPrimary: false,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditMode ? '编辑' : '添加'} TradingView 配置</DialogTitle>
          <DialogDescription>
            配置 TradingView 的 SESSION 和 SIGNATURE，用于访问 TradingView API
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* 配置名称 */}
            <div className="space-y-2">
              <Label htmlFor="name">
                配置名称 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="例如：主账号、备用账号"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* 描述 */}
            <div className="space-y-2">
              <Label htmlFor="description">描述</Label>
              <Textarea
                id="description"
                placeholder="描述此配置的用途..."
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* SESSION */}
            <div className="space-y-2">
              <Label htmlFor="session">
                SESSION <span className="text-destructive">*</span>
              </Label>
              <Input
                id="session"
                placeholder="nrcep4i1ggjhqxgmze3psxccx42ph9fg"
                value={formData.session}
                onChange={(e) =>
                  setFormData({ ...formData, session: e.target.value })
                }
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground">
                从 TradingView 浏览器 Cookie 中获取 SESSION 值
              </p>
            </div>

            {/* SIGNATURE */}
            <div className="space-y-2">
              <Label htmlFor="signature">
                SIGNATURE <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="signature"
                placeholder="v3:pwR1acySrSs50VrxhzXpgcONl6dEkrqM8tPQb2g5Qj0="
                rows={3}
                value={formData.signature}
                onChange={(e) =>
                  setFormData({ ...formData, signature: e.target.value })
                }
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground">
                从 TradingView 浏览器 Cookie 中获取 SIGNATURE 值
              </p>
            </div>

            {/* 设为主配置 */}
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="isPrimary" className="text-base">
                  设为主配置
                </Label>
                <p className="text-sm text-muted-foreground">
                  系统默认使用主配置连接 TradingView
                </p>
              </div>
              <Switch
                id="isPrimary"
                checked={formData.isPrimary}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isPrimary: checked })
                }
              />
            </div>

            {/* 启用状态 */}
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="isActive" className="text-base">
                  启用状态
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isEditMode ? '是否启用此配置' : '创建后是否立即启用此配置'}
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
              {isEditMode ? '保存更改' : '创建配置'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
