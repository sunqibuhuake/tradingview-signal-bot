export interface Market {
  id: string;
  name: string;
  code: string;
  symbol: string;
  type: string;
  icon?: string;
  description?: string;
  exchange?: string;
  isActive: boolean;
  displayName?: string;
  createdAt: string;
  updatedAt: string;
  _count: {
    tasks: number;
  };
}

export interface PaginationInfo {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export interface MarketsResponse {
  markets: Market[];
  pagination: PaginationInfo;
}
