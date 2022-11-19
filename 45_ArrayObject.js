const blog = {
  name: 'kimo',
  age: 36,
};

var arr = [];

for (var prop in blog) {
  arr.push([prop, blog[prop]]);
}

console.log(arr);

var obj = {};

for (var i = 0; i < arr.length; i++) {
  obj[arr[i][0]] = arr[i][1];
}

console.log(obj);
