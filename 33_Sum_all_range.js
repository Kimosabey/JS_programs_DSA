/**
 * Calculate the sum of numbers
 */
function sumOfRange(from, to) {
  let sum = 0;
  for (let index = from; index <= to; index++) {
    sum += index;
  }
  return sum;
}

console.log(sumOfRange(10, 15));
