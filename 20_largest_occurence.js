// highest number and occurance

// occurance

const arr = [1, 1, 2, 3, 1, 4];

let count = {};

for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]]) {
    count[arr[i]] += 1;
  } else {
    count[arr[i]] = 1;
  }
}
// largest in array
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  let compareMe = arr[i];
  if (compareMe > largest) {
    largest = compareMe;
  }
}

const largestAndOccurance = {
  largest: largest,
  occurance: count[largest],
};

console.log('largest :', largest);
console.log('occurance :', count);
console.log(largestAndOccurance);
