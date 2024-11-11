import { usePagination } from "./hooks/usePagination";
import style from "./Pagination.module.scss";

type Props = {
  currentPage: number;
  pageLength: number;
  totalClients: number;
  setCurrentPage: (page: number) => void;
};

export function Pagination({
  currentPage,
  pageLength,
  totalClients,
  setCurrentPage,
}: Props) {
  const { handlePageChange, totalPages } = usePagination({
    pageLength,
    setCurrentPage,
    totalClients,
  });

  return (
    <div className={style.paginationContainer}>
      {Array.from({ length: totalPages }).map((page, index) => {
        return (
          <button
            title={page?.toString()}
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? style.activePage : undefined}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
