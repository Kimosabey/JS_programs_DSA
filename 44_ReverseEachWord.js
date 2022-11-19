// Given a string, reverse each word in the sentence
var string = 'Welcome to this Javascript Guide!';

// 1) way

function ReverseEachWord(str) {
  let splitStr = str.split(' ');

  let concatMeMain = '';

  for (let i = 0; i < splitStr.length; i++) {
    const element = splitStr[i];
    concatMeMain += reverseOne(element) + ' ';
  }

  return concatMeMain;
}

function reverseOne(strOne) {
  let concatME = '';
  for (let i = strOne.length - 1; i >= 0; i--) {
    const element = strOne[i];
    concatME += element;
  }
  return concatME;
}

console.log(reverseOne('Kimosa'));
console.log(ReverseEachWord(string));

// 2) way

// "I am Groot!"

let strGroot = 'Welcome to this Javascript Guide!';

var reverseEntireSentence = ReverseEverything(strGroot, '');

var reverseEachWord = ReverseEverything(reverseEntireSentence, ' ');

function ReverseEverything(str, seperator) {
  console.log(str.split(seperator));
  return str.split(seperator).reverse().join(seperator);
}

console.log('reverseEntireSentence : ', reverseEntireSentence);

console.log('reverseEachWord : ', reverseEachWord);

// Empty an array :
let emptyMeArr = [1, 2, 3, 4];
// emptyMeArr.length =0 //(1)

// emptyMeArr.splice(0, emptyMeArr.length); //(2)

while (emptyMeArr.length) {
  emptyMeArr.pop();
}
console.log('emptyMeArr :', emptyMeArr);
