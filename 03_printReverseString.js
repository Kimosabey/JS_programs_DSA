var kimoStr = 'Kimosabey';

// forward
for (let index = 0; index < [...kimoStr].length; index++) {
  const element = [...kimoStr][index];
  console.log(element);
}

// reverse
var toArray = [];
for (let index = [...kimoStr].length - 1; index >= 0; index--) {
  const element = [...kimoStr][index];
  console.log(element);
  toArray.push(element);
}

console.log(toArray);
