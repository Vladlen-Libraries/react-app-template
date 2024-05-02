export interface APIListResponse<T> {
  count: number;
  page: number;
  pageCount: number;
  total: number;
  data: T[];
}
