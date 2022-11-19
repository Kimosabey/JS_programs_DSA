var arrOfStrs = ['a9', 'abc', 'abcdefLongest', 'abcde'];

var max_str = arrOfStrs[0].length;
var longest = arrOfStrs[0];

function longest_Str_in_Array() {
  for (let i = 1; i < arrOfStrs.length; i++) {
    var maxi = arrOfStrs[i].length;

    if (maxi > max_str) {
      longest = arrOfStrs[i];
      max_str = maxi;
    }
  }
  return longest;
}

var min_str = arrOfStrs[0].length;
var smallest = arrOfStrs[0];

function smallest_Str_in_Array() {
  for (let i = arrOfStrs.length - 1; i >= 0; i--) {
    var maxi = arrOfStrs[i].length;

    if (maxi > max_str) {
      smallest = arrOfStrs[i];
      max_str = maxi;
    }
  }
  return smallest;
}

console.log('longest_Str_in_Array :', longest_Str_in_Array());
console.log('smallest_Str_in_Array :', smallest_Str_in_Array());
