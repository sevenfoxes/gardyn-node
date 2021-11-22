import { useState } from 'react';

export const usePagination = ({ items, pageSizes = [25, 50, 100] }) => {
  const [pageSize, setPageSize] = useState(pageSizes[0]);
  const [page, setPage] = useState(1);
  const hasChunks = !!items.length;

  const chunk = Array.from(items.slice(page - 1, pageSize + page));
  return [chunk, hasChunks, pageSize, pageSizes, setPageSize, page, setPage];
};
