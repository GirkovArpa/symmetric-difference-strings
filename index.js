'use strict';

const equals = a => b => a === b;
const occurences = (array, value) => array.filter(equals(value)).length;

/** Returns an array of all values present in either `a` or `b` but not both.  Strings only! */
export default function symmetricDifference(a, b) {
  const vals = Array.from(new Set(a.concat(b)));
  const diffs = vals.reduce((diffs, key) => {
    const diff = occurences(a, key) - occurences(b, key);
    diffs[key] = Math.abs(diff);
    return diffs;
  }, {});
  return Object.entries(diffs)
    .map(([val, count]) => new Array(count).fill(val))
    .flat(1e99);
}