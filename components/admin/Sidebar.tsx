'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Bot, 
  TrendingUp, 
  BarChart3, 
  ListTodo, 
  Webhook, 
  Settings, 
  FileText,
  Activity,
  Zap
} from 'lucide-react';

const navigation = [
  {
    name: '概览',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Bot 控制',
    href: '/admin/bot',
    icon: Bot,
  },
  {
    name: '标的管理',
    href: '/admin/markets',
    icon: TrendingUp,
  },
  {
    name: '指标管理',
    href: '/admin/indicators',
    icon: BarChart3,
  },
  {
    name: '任务管理',
    href: '/admin/tasks',
    icon: ListTodo,
  },
  {
    name: 'Webhook 配置',
    href: '/admin/webhooks',
    icon: Webhook,
  },
  {
    name: 'TradingView 配置',
    href: '/admin/tradingview-config',
    icon: Settings,
  },
  {
    name: '执行结果',
    href: '/admin/executions',
    icon: FileText,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow glass border-r border-border/50 pt-5 pb-4 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-6 mb-8">
            <div className="w-11 h-11 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-foreground tracking-tight">
                TradingView
              </h1>
              <p className="text-xs text-primary font-medium">
                Signal Bot
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all
                    ${
                      isActive
                        ? 'bg-primary/10 text-primary shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }
                  `}
                >
                  <Icon 
                    className={`
                      w-5 h-5 transition-all
                      ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}
                    `}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="ml-3">{item.name}</span>
                  {isActive && (
                    <span className="ml-auto">
                      <Activity className="w-4 h-4 text-primary animate-pulse" />
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* System Stats */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-border/50">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">系统状态</span>
                <span className="flex items-center text-success font-semibold">
                  <span className="w-2 h-2 bg-success rounded-full mr-1.5 animate-pulse-glow"></span>
                  运行中
                </span>
              </div>
              <div className="flex items-center justify-between text-xs bg-secondary/50 rounded-lg px-3 py-2">
                <span className="text-muted-foreground">活跃任务</span>
                <span className="font-bold text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between text-xs bg-secondary/50 rounded-lg px-3 py-2">
                <span className="text-muted-foreground">今日信号</span>
                <span className="font-bold text-foreground">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 glass border-t border-border/50 z-50">
        <nav className="flex justify-around">
          {navigation.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex flex-col items-center py-3 px-2 text-xs font-medium min-w-0 flex-1
                  ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }
                `}
              >
                <Icon 
                  className="w-5 h-5 mb-1" 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="truncate max-w-full">
                  {item.name.split('管理')[0].split(' ')[0]}
                </span>
                {isActive && (
                  <span className="w-1 h-1 bg-primary rounded-full mt-1"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
