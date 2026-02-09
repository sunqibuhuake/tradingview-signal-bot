export interface Indicator {
  id: string;
  name: string;
  tradingViewId: string;
  description?: string;
  author?: string;
  version: string;
  outputFields: Record<string, string>;
  isActive: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  _count: {
    taskIndicators: number;
  };
}

export interface PaginationInfo {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export interface IndicatorsResponse {
  indicators: Indicator[];
  pagination: PaginationInfo;
}
