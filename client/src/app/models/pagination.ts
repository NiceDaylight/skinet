export interface Pagination<T> {
    pageindex: number;
    pageSize: number;
    count: number;
    data: T;
  }