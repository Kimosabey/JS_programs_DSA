let list = [100, 2, 4, 6, 1000, 22, 99];
let item = 1000;

// binarySearch works on only ordered list or array , you can order it  and do binary search

const BubbleSort = () => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }

  return list;
};

const binarySearch = (list, item) => {
  let sortedArray = BubbleSort(list);
  console.log('Sorted Array :', sortedArray);
  let low = 0;
  let high = sortedArray.length - 1;
  console.log(
    'divide array by 2 element :',
    sortedArray[Math.floor((low + high) / 2)]
  );

  while (low <= high) {
    // divide array by 2
    const mid = Math.floor((low + high) / 2);

    const guess = sortedArray[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  // if not found

  return false;
};

// console.log(binarySearch(list, item));

// LEFT MID RIGHT

let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

function binarySearch2(array, target) {
  // Pointes Left and Right
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      // Then ignore everything R.H.S now
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

console.log(binarySearch2(nums, 7));
console.log(binarySearch2(nums, 15));
