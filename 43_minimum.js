// 1) simple 2 for loops + swap
function minimum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return 'minimum : ' + Number(arr[0]);
}
// 2 )
console.log(minimum([10, 4, 9, 2, 40, 50]));

const arr1 = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4, 1];
const min1 = Math.min(...arr1);
console.log('minimum :', min1);

// 3 )
var arr2 = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
var min2 = Math.min.apply(Math, arr2);
console.log('minimum :', min2);

// 4 )  simple For loop 2nd Way

const forLoopMinMax = (karr) => {
  let min = karr[0],
    max = karr[0];

  for (let i = 0; i < karr.length; i++) {
    const element = karr[i];

    min = element < min ? element : min;
    max = element > max ? element : max;
  }

  return [min, max];
};

console.log(forLoopMinMax([14, 58, 20, 77, 66, 82, 42, 67, 42, 4]));
