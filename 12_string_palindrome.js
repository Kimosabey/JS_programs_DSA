function check_if_string_palindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}

console.log(check_if_string_palindrome('KIMIK'));

