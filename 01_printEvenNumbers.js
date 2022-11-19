function printEvenNumbers(numArr) {
  var arr = [];
  for (let index = 0; index < numArr.length; index++) {
    const element = numArr[index];
    if (element % 2 == 0) {
      arr.push(element);
    }
  }
  return arr;
}

console.log(printEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
