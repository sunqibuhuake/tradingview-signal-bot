import { TradingViewConfig } from "@/generated/prisma";

export type TradingViewConfigType = TradingViewConfig;

export interface TradingViewConfigsResponse {
  configs: TradingViewConfigType[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
