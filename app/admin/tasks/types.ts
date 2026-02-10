import { ExecutionMode, Indicator, Market, Task as PrismaTask, TaskIndicator as PrismaTaskIndicator, TaskStatus, Timeframe, DingTalkWebhook } from "@/generated/prisma";

// Re-export Prisma Task for use in other modules
export type Task = PrismaTask;

export type SignalTask  = PrismaTask & {
  // id: string;
  // name: string;
  // description?: string;
  // status: TaskStatus
  // executionMode: ExecutionMode
  // timeframe: Timeframe;
  // range: number;
  // enableNotification: boolean;
  // errorMessage?: string;
  // lastExecutedAt?: string;
  // nextExecutionAt?: string;
  // createdAt: string;
  // updatedAt: string;
  market:  Market;
  dingTalkWebhook?: DingTalkWebhook | null;
  taskIndicators: Array<PrismaTaskIndicator & { indicator: Indicator }>;
  _count: {
    executions: number;
  };
}

export interface TasksResponse {
  tasks: Task[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
