import { useState } from 'react';
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

interface CreateWebhookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function CreateWebhookDialog({
  open,
  onOpenChange,
  onSuccess,
}: CreateWebhookDialogProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    webhookUrl: '',
    secret: '',
    isActive: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('请输入 Webhook 名称');
      return;
    }

    if (!formData.webhookUrl.trim()) {
      toast.error('请输入 Webhook URL');
      return;
    }

    // 验证 URL 格式
    try {
      new URL(formData.webhookUrl);
    } catch {
      toast.error('请输入有效的 URL 地址');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/webhooks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || '创建失败');
      }

      toast.success('Webhook 创建成功');
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
      webhookUrl: '',
      secret: '',
      isActive: true,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>添加钉钉 Webhook</DialogTitle>
          <DialogDescription>
            配置钉钉群机器人的 Webhook 地址，用于发送交易信号通知
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Webhook 名称 */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Webhook 名称 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="例如：VIP 客户群、开发团队群"
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
                placeholder="描述此 Webhook 的用途..."
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Webhook URL */}
            <div className="space-y-2">
              <Label htmlFor="webhookUrl">
                Webhook URL <span className="text-destructive">*</span>
              </Label>
              <Input
                id="webhookUrl"
                type="url"
                placeholder="https://oapi.dingtalk.com/robot/send?access_token=..."
                value={formData.webhookUrl}
                onChange={(e) =>
                  setFormData({ ...formData, webhookUrl: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground">
                从钉钉群机器人设置中获取 Webhook 地址
              </p>
            </div>

            {/* 加签密钥 */}
            <div className="space-y-2">
              <Label htmlFor="secret">加签密钥（可选）</Label>
              <Input
                id="secret"
                placeholder="SEC..."
                value={formData.secret}
                onChange={(e) =>
                  setFormData({ ...formData, secret: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground">
                如果钉钉机器人启用了加签验证，请填入密钥
              </p>
            </div>

            {/* 是否启用 */}
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="isActive" className="text-base">
                  启用状态
                </Label>
                <p className="text-sm text-muted-foreground">
                  创建后是否立即启用此 Webhook
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
              创建 Webhook
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
