/**
 * #7: Calculate the sum of odd numbers greater than 10 and less than 30
 */

const sum_of_odds = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    if (element % 2 !== 0) {
      sum += element;
    }
  });
  return sum;
};

console.log(sum_of_odds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
