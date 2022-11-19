/**
 * 1. Find the frequency of elements in array
 */

// 1 way in For Of
function Frequency(arr) {
  let count = {};

  for (const iterator of arr) {
    console.log(iterator);

    if (count[iterator]) {
      count[iterator] += 1;
    } else {
      count[iterator] = 1;
    }
  }

  return count;
}

console.log(Frequency(['hello', 'world', 'js', 'react', 'js', 'hello']));

// 2nd Way with reduce

function FrequencyReduceMethod(arr) {
  return arr.reduce((acc, currVal) => {
    if (acc[currVal]) {
      acc[currVal] += 1;
    } else {
      acc[currVal] = 1;
    }

    return acc;
  }, {});


}
console.log(
  FrequencyReduceMethod(['hello', 'world', 'js', 'react', 'js', 'hello'])
);

// Case 2 :

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.


// 1) way 
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
