import { useState } from 'react';
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
import toast from 'react-hot-toast';

interface CreateIndicatorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

interface FormData {
  name: string;
  tradingViewId: string;
  description: string;
  author: string;
  version: string;
  outputFields: string;
  isActive: boolean;
  isPublic: boolean;
}

export function CreateIndicatorDialog({
  open,
  onOpenChange,
  onSuccess,
}: CreateIndicatorDialogProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    tradingViewId: '',
    description: '',
    author: '',
    version: '1.0.0',
    outputFields: '',
    isActive: true,
    isPublic: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('请输入指标名称');
      return;
    }

    if (!formData.tradingViewId.trim()) {
      toast.error('请输入 TradingView ID');
      return;
    }

    if (!formData.outputFields.trim()) {
      toast.error('请输入输出字段');
      return;
    }

    // Parse output fields
    let parsedOutputFields: Record<string, string>;
    try {
      const fields = formData.outputFields.split(',').map((f) => f.trim());
      parsedOutputFields = Object.fromEntries(
        fields.map((field) => [field, field])
      );
    } catch (error) {
      toast.error('输出字段格式错误，请使用逗号分隔');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/indicators', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          outputFields: parsedOutputFields,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || '创建失败');
      }

      toast.success('指标创建成功');
      onSuccess();
      onOpenChange(false);
      // Reset form
      setFormData({
        name: '',
        tradingViewId: '',
        description: '',
        author: '',
        version: '1.0.0',
        outputFields: '',
        isActive: true,
        isPublic: false,
      });
    } catch (error: any) {
      toast.error(error.message || '创建失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>添加指标</DialogTitle>
          <DialogDescription>
            添加新的 TradingView 自定义指标到系统中
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                指标名称 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="例如：成交量指标"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tradingViewId">
                TradingView ID <span className="text-destructive">*</span>
              </Label>
              <Input
                id="tradingViewId"
                value={formData.tradingViewId}
                onChange={(e) =>
                  setFormData({ ...formData, tradingViewId: e.target.value })
                }
                placeholder="例如：PUB;xxxxx"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">描述</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="简要描述该指标的功能和用途"
              rows={3}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="author">作者</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                placeholder="指标作者"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="version">
                版本 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="version"
                value={formData.version}
                onChange={(e) =>
                  setFormData({ ...formData, version: e.target.value })
                }
                placeholder="1.0.0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="outputFields">
              输出字段 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="outputFields"
              value={formData.outputFields}
              onChange={(e) =>
                setFormData({ ...formData, outputFields: e.target.value })
              }
              placeholder="使用逗号分隔，例如：signal, trend, volume"
            />
            <p className="text-xs text-muted-foreground">
              多个字段请用逗号分隔
            </p>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="isActive">启用状态</Label>
              <p className="text-sm text-muted-foreground">
                启用后该指标可以被任务使用
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

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="isPublic">公开状态</Label>
              <p className="text-sm text-muted-foreground">
                公开后其他用户也可以使用此指标
              </p>
            </div>
            <Switch
              id="isPublic"
              checked={formData.isPublic}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, isPublic: checked })
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
              {loading ? '创建中...' : '创建指标'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
