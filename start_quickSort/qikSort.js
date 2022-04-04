function qsort(...args) {
  if (args.length === 0) return [];
  const [x, ...xs] = args;
  return [
    ...qsort(...xs.filter(elm => elm <= x)),
    x,
    ...qsort(...xs.filter(elm => elm > x))
  ];
}

console.log(qsort(1, 5, 2, 5, 8, 9, 10, 2));
