'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { 
  TrendingUp, 
  Activity, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  Plus,
  Settings,
  CheckCircle2,
  Database,
  Wifi,
  Clock,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          概览仪表盘
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          欢迎回来，这是您的交易信号监控平台概览
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="glass rounded-2xl border border-border/50 p-6 card-hover">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">
                总标的数
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground">
                0
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-success font-semibold">+0</span> 本月新增
              </p>
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-primary" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-border/50 p-6 card-hover">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">
                活跃任务
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground">
                0
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                共 0 个任务
              </p>
            </div>
            <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-success" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-border/50 p-6 card-hover">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">
                今日信号
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground">
                0
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-success font-semibold">0 买入</span> / <span className="text-destructive font-semibold">0 卖出</span>
              </p>
            </div>
            <div className="w-14 h-14 bg-warning/10 rounded-xl flex items-center justify-center">
              <Zap className="w-7 h-7 text-warning" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-border/50 p-6 card-hover">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">
                成功率
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground">
                --%
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                过去 30 天
              </p>
            </div>
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-7 h-7 text-purple-500" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <Link href="/admin/markets" className="group relative overflow-hidden gradient-primary rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                添加标的
              </h3>
              <p className="text-white/90 text-sm">开始监控新的交易标的</p>
            </div>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        <Link href="/admin/indicators" className="group relative overflow-hidden gradient-success rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                配置指标
              </h3>
              <p className="text-white/90 text-sm">设置 TradingView 技术指标</p>
            </div>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        <Link href="/admin/tasks" className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                创建任务
              </h3>
              <p className="text-white/90 text-sm">设置自动化监控任务</p>
            </div>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>
      </div>

      {/* Recent Activities & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Signals */}
        <div className="glass rounded-2xl border border-border/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              最近信号
            </h2>
            <Link href="/admin/executions" className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-all">
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              暂无信号记录
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              创建任务后将显示实时信号
            </p>
          </div>
        </div>

        {/* System Status */}
        <div className="glass rounded-2xl border border-border/50 p-6">
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" />
            系统状态
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl border border-border/30 transition-all hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                <Wifi className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">API 服务</span>
              </div>
              <span className="text-sm font-bold text-success">运行中</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl border border-border/30 transition-all hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                <Database className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">数据库</span>
              </div>
              <span className="text-sm font-bold text-success">正常</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl border border-border/30 transition-all hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">任务调度器</span>
              </div>
              <span className="text-sm font-bold text-muted-foreground">未启动</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl border border-border/30 transition-all hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">通知服务</span>
              </div>
              <span className="text-sm font-bold text-success">正常</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
