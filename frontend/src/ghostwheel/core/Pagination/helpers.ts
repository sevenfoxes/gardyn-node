export const pages = (items, itemsPerPage) =>
  new Array(Math.ceil(items.length / itemsPerPage))
    .fill(1)
    .map((_, i) => i + 1);
