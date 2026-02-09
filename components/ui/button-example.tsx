"use client";

import React from 'react';
import { Button } from './button';
import { Upload, Download, Save, Settings, Plus } from 'lucide-react';

export const ButtonExample = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-6">Button 组件示例</h1>
      
      {/* Primary Variant 展示 */}
      <div className="border rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-4">Primary Variant (新增紫色主题)</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            Primary Button
          </Button>
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4" />
            Small Primary
          </Button>
          <Button variant="primary" size="lg">
            <Upload className="w-4 h-4" />
            Large Primary
          </Button>
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
        </div>
      </div>

      {/* 所有 Variants 对比 */}
      <div className="border rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-4">所有按钮变体对比</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* 实际使用场景 */}
      <div className="border rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-4">实际使用场景</h2>
        <div className="space-y-4">
          {/* 表单操作 */}
          <div className="flex gap-3">
            <Button variant="primary">
              <Save className="w-4 h-4" />
              保存
            </Button>
            <Button variant="outline">取消</Button>
            <Button variant="ghost">
              <Settings className="w-4 h-4" />
              设置
            </Button>
          </div>

          {/* 文件操作 */}
          <div className="flex gap-3">
            <Button variant="primary" size="sm">
              <Upload className="w-4 h-4" />
              上传文件
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4" />
              下载
            </Button>
          </div>

          {/* 危险操作 */}
          <div className="flex gap-3">
            <Button variant="destructive" size="sm">
              删除
            </Button>
            <Button variant="outline" size="sm">
              取消
            </Button>
          </div>
        </div>
      </div>

      {/* 深色背景下的效果 */}
      <div className="border rounded-lg p-6 bg-gray-900">
        <h2 className="text-lg font-semibold mb-4 text-white">深色背景下的效果</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  );
};