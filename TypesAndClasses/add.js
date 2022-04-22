/**
 * one cannot call this function as
 * add(1,3,4);
 * It has to be of the form
 * add(1)(2)(3);
 *
 */

const add = x => y => z => x + y + z;

/**
 * Imperative style used to produce
 * functional style API - infinite currying
 * add(1)(2)(3).......();
 */

/**
 * it's [functional-STYLE] of programming but not [functional-programming]
 */

const _add = arg => {
  const arr = [];
  if (arg) {
    arr.push(arg);
    return function add(x) {
      if (x) return arr.push(x), add;
      return arr.reduce((ac, x) => ac + x, 0);
    };
  }
  return 0;
};
