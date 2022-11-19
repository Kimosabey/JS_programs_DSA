// input = [1,22,33,22,1,2,3,11,22,33,2,1,2,3,12]

// output = [1,2,3,11,12,22,33]

function UniqSort(arr) {
  var uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (uniqArr.includes(element)) {
    } else {
      uniqArr.push(element);
    }
  }

  return sortAnArray(uniqArr);
}

console.log(
  'UniqSort :',
  UniqSort([1, 22, 33, 22, 1, 2, 3, 11, 22, 33, 2, 1, 2, 3, 12])
);

// Sort Asc Order :

function sortAnArray(arr2) {
  for (let i = 1; i < arr2.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr2[i] > arr2[j]) {
        var temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
    }
  }

  console.log(arr2.length - 1);
  return arr2;
}

console.log('ASC : ', sortAnArray([1, 7, 2, 8, 3, 4, 5, 0, 9]));

console.log('DESC :', descOrder([1, 7, 2, 8, 3, 4, 5, 0, 9]));

function descOrder(arr3) {
  for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
  }
  return arr3;
}
