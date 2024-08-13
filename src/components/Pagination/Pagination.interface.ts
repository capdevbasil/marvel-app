export interface PaginationInterface {
  totalPages: number;
  current: number;
  limit: number;
  onPageChange: (page: number) => void;
}
