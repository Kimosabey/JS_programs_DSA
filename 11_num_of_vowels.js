function num_of_vowels(str) {
  let count = 0;
  let pattern = /[aeiou]/g;
  let result = str.match(pattern);
  console.log(result.length);

  return `${str} consist of ${result.length} vowels`;
}

console.log(num_of_vowels('Kimosabey'));
console.log(num_of_vowels('aeiou'));
