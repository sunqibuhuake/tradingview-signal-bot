import { Clock, FileQuestion, AlertCircle, TrendingUp } from 'lucide-react';
import { ReactNode } from 'react';

interface EmptyStateProps {
  icon?: 'clock' | 'file' | 'alert' | 'trending';
  title: string;
  description?: string;
  action?: ReactNode;
}

const icons = {
  clock: Clock,
  file: FileQuestion,
  alert: AlertCircle,
  trending: TrendingUp,
};

export function EmptyState({ 
  icon = 'file', 
  title, 
  description, 
  action 
}: EmptyStateProps) {
  const Icon = icons[icon];
  
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed bg-muted/30 py-16 px-4">
      <div className="rounded-full bg-muted p-4 mb-4">
        <Icon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground text-center max-w-sm mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
