export interface Pagination<T> {
  pageIndex: number;
  totalCount: number;
  pageSize: number;
  data: T;
}