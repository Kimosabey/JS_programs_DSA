function filter_out_negative_numbers(arr) {
  var BArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      BArr.push(arr[i]);
    }
  }
  return BArr;
}

console.log(filter_out_negative_numbers([1, -1, 2, -3, 4, 6, -2]));
