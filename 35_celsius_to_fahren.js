/**
 * Create a function that will convert from Celsius to Fahrenheit
 */

const Celsius_to_Fahrenheit = (cel) => {
  return cel * 1.8 + 32;
};

console.log(Celsius_to_Fahrenheit(20));

var arr = [1, 2, 3, 7, 4, 6];

var maxim = arr[0];
var largestVal = 0;

for (let index = 0; index < arr.length; index++) {
  if (arr[index] > maxim) {
    maxim = arr[index];
    largestVal = arr[index];
  }
}
console.log(largestVal);
