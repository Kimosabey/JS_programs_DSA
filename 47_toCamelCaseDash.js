function toCamelCase(str) {
  let splitWords = str.replaceAll('_', ' ').replaceAll('-', ' ').split(' ');

  let concatMe = '';

  for (let i = 0; i < splitWords.length; i++) {
    concatMe += makeFirstCap(splitWords[i]);
  }

  return concatMe;
}

function makeFirstCap(word) {
  let caps = word[0].toUpperCase();

  return caps + word.slice(1, word.length);
}
console.log(toCamelCase('The-king-kimo'));
console.log(toCamelCase('The_king_kimo'));
console.log(toCamelCase('The_king-kimo'));
console.log(toCamelCase('The_king-kimo'));

// Way 2

var someStr = 'the_warrior_me';
console.log(toCamelCase2(someStr));
console.log(toCamelCase('The_king-kimo'));
function toCamelCase2() {
  var strArr = [...someStr];

  for (let i = 0; i < strArr.length; i++) {
    strArr[i];
    if (strArr[i] === '_' || strArr[i] === '_') {
      strArr[i] = ' ';
    }
  }
  let bunch_of_words = strArr.join('').split(' ');

  let finalConcat = '';

  for (let i = 0; i < bunch_of_words.length; i++) {
    finalConcat += makeCapFirst(bunch_of_words[i]);
  }

  function makeCapFirst(word) {
    let makeCap =
    'a' <= word[0] && word[0] <= 'z'
      ? String.fromCharCode(word[0].charCodeAt(0) - 32)
      : word[0];

    return makeCap + word.slice(1, word.length);
  }

  return finalConcat;
}
