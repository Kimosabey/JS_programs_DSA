var arr = [1, 2, 3, 4, 5];

var sum = 0;

function sum_of_array_items() {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum_of_array_items(sum));
