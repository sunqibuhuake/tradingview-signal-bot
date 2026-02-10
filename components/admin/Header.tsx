'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Search, Bell, Settings, ChevronDown, User, LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface AdminHeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
  };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="glass sticky top-0 z-40">
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2.5 border border-input rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
                placeholder="搜索标的、指标、任务..."
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <button 
              className="relative p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all"
              title="通知"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full animate-pulse-glow"></span>
            </button>

            {/* Settings */}
            <button 
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all hidden sm:block"
              title="设置"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-xl hover:bg-secondary transition-all group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-semibold">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {user.name || '管理员'}
                  </p>
                  <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                    {user.email}
                  </p>
                </div>
                <ChevronDown className="hidden sm:block w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowUserMenu(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-60 glass rounded-xl shadow-2xl py-2 z-50 border border-border/50">
                    <div className="px-4 py-3 border-b border-border/50">
                      <p className="text-sm font-semibold text-foreground">
                        {user.name || '管理员'}
                      </p>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {user.email}
                      </p>
                    </div>
                    <a
                      href="/admin/profile"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-all"
                    >
                      <User className="w-4 h-4" />
                      个人资料
                    </a>
                    <a
                      href="/admin/settings"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-all"
                    >
                      <Settings className="w-4 h-4" />
                      设置
                    </a>
                    <div className="border-t border-border/50 my-2"></div>
                    <button
                      onClick={() => signOut({ callbackUrl: '/auth/signin' })}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-destructive hover:bg-secondary transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      退出登录
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
