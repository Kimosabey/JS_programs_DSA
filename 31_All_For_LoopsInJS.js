var arr = ['a', 'b', 'c'];

const object = {
  name: 'a',
  age: 26,
  place: 'mysore',
};

for (const key in arr) {
  console.log(arr[key]);
}

for (const ele of arr) {
  console.log(ele);
}

arr.forEach((element, index, array) => {
  console.log(element);
});
