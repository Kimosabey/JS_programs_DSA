/**
 * Calculate the sum of digits of a    positive integer number.
 *
 */

const sum_of_digits = (digits) => {
  console.log(typeof digits);

  let digTOstring = [...digits.toString()];

  let digArr = digTOstring.map(Number);

  let sum = 0;

  for (let index = 0; index < digArr.length; index++) {
    sum += digArr[index];
  }
  return sum;
};

console.log(sum_of_digits(123));
