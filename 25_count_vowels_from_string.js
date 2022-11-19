const array = [1, 2, 3];
const value = 1;
const isInArray = array.includes(value);
console.log(isInArray); // true

console.log(['a', 'e'].includes('k'));

function CountVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let strArr = [...str];

  for (var i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      count = count + 1;
    }
  }

  return count;
  // return(str.match(/[aeiou]/ig)||[]).length;
}

console.log(CountVowels('Kimosabey'));
