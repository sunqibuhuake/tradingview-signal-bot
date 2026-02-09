import { DingTalkWebhook } from "@/generated/prisma";

export type WebhookWithCount = DingTalkWebhook & {
  _count: {
    tasks: number;
  };
};

export interface WebhooksResponse {
  webhooks: WebhookWithCount[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
