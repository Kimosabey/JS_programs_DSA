/**
 * Return a Boolean if a number is divisible by 10
 */

function checkIfNumDivBy10(num) {
  console.log(num % 10);
  return num % 10 == 0;
}

console.log(checkIfNumDivBy10(300));
