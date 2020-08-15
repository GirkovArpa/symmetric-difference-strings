# symmetric-difference-strings

Find the symmetric difference of 2 string arrays.  Only works with string arrays!

In other words, an array containing the strings which exist in either array, but not in both.

## Installation
```
$ npm i symmetric-difference-strings
```

## Usage
```javascript
import symmetricDifference from 'symmetric-difference-strings';

const diff = symmetricDifference(
  ['hello', 'world', 'foo', 'foo', 'foo'],
  ['hello', 'world', 'foo', 'bar']
);

console.log(diff);

// => ['foo', 'foo', 'bar']
```