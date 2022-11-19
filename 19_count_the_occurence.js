// Take a string like "wrong number" and find the no.of each character appear in the string
// like n=2, w=1 etc...

const wrongNumber = 'wrong number';

const strArr = [...wrongNumber];

const count = {};
for (const iterator of strArr) {
  console.log(iterator);

  if (count[iterator]) {
    count[iterator] += 1;
  } else {
    count[iterator] = 1;
  }
}

console.log(count);
