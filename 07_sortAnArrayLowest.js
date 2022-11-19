var numArray = [140000, 104, 99];
for (var i = 0; i < numArray.length; i++) {
  var target = numArray[i];
  for (var j = i - 1; j >= 0; j--) {
    if (numArray[j] > target) {
      numArray[j + 1] = numArray[j];
    }
  }
  numArray[j + 1] = target;
}
console.log(numArray);
