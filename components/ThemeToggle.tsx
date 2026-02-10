'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-secondary animate-pulse" />
    );
  }

  return (
    <div className="relative inline-flex items-center rounded-lg bg-secondary p-1">
      <button
        onClick={() => setTheme('light')}
        className={`
          relative rounded-md p-2 transition-all duration-200
          ${theme === 'light' 
            ? 'bg-background text-primary shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }
        `}
        title="浅色模式"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`
          relative rounded-md p-2 transition-all duration-200
          ${theme === 'system' 
            ? 'bg-background text-primary shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }
        `}
        title="跟随系统"
      >
        <Monitor className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`
          relative rounded-md p-2 transition-all duration-200
          ${theme === 'dark' 
            ? 'bg-background text-primary shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }
        `}
        title="深色模式"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
