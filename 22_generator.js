function printMe() {
  return 10;
  return 20;
}

const callMe = printMe();

console.log(callMe);

// to overcome this scenario Generator helps

function* ShowMe() {
  yield 10;
  yield 20;
}

const letsSee = ShowMe();
console.log(letsSee.next());
console.log(letsSee.next());
console.log(letsSee.next());
