const flatten = function (arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(flatten([2, 2, 5, [5, [5, [6]], 7]]));
console.log(flatten([1, 2, [3, 4, [5, 6]]]));
console.log(flatten([1, 2, [3, 4]]));

// 2) way
let flatArrReduceMethod = [2, 2, 5, [5, [5, [6]], 7]].reduce(
  (accum, currVal) => {
    return accum.concat(currVal);
  },
  []
);

console.log('Reduce Method :', flatArrReduceMethod);

// 3) Way  ES6 Solution

const oneLevelDeep = [
  [1, 2],
  [3, [1, 2]],
];

const flattened = [].concat(...oneLevelDeep); // [1, 2, 3,]

console.log('ES6 :', flattened);
// 4) way #Older Browser Solution

// const oneLevelDeep = [[1, 2], [3]];

// const flattened = [].concat.apply([], oneLevelDeep);
// [1, 2, 3,]

// 5) way Recursion + reduce

var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
