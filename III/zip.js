/**
 * functional style in an imperative language
 * - no multiple pattern matchin support as given in haskell
 */
let zipp = ([z, ...zs], [x, ...xs]) => {
  if (!z || !x) return [];
  return [[z, x], ...zipp(zs, xs)];
};
