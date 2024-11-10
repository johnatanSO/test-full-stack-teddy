type Props = {
  totalClients: number;
  pageLength: number;
  setCurrentPage: (page: number) => void;
};
export function usePagination({
  totalClients,
  pageLength,
  setCurrentPage,
}: Props) {
  const totalPages = Math.ceil(totalClients / pageLength);

  function handlePageChange(page: number) {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return {
    handlePageChange,
    totalPages,
  };
}
