import { useMemo } from "react";
import { PaginationInterface } from "./Pagination.interface";
import style from "./style.module.scss";

export default function Pagination(props: PaginationInterface) {
  const pages = useMemo(() => {
    return Math.ceil(props.totalPages / props.limit);
  }, [props.totalPages, props.limit]);
  const { current: currentPage, onPageChange: setCurrentPage } = props;
  const maxPagesToShow = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(pages, startPage + maxPagesToShow - 1);

  return (
    <ul className={style.paginationContainer}>
      {startPage > 1 && (
        <li>
          <button onClick={() => setCurrentPage(1)}>1</button>
        </li>
      )}
      {startPage > 2 && <li>...</li>}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      ).map((page) => (
        <li key={page}>
          <button
            className={page === currentPage ? style.activePage : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        </li>
      ))}
      {endPage < pages - 1 && <li>...</li>}
      {endPage < pages && (
        <li>
          <button onClick={() => setCurrentPage(pages)}>{pages}</button>
        </li>
      )}
    </ul>
  );
}
