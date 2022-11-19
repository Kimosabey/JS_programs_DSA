const person = {
  name: 'Kimos',
  age: 30,
};

// Output We want :

// [["name":"Kimos"],["age":"30"]]

// so
//  1 Way

console.log(Object.entries(person));

// 2 Way

console.log(
  Object.keys(person).map((ele) => {
    return [ele, person[ele] + ''];
  })
);

// 3 way
const keyArr = Object.keys(person);

const someArr = [];

for (let index = 0; index < keyArr.length; index++) {
  const element = keyArr[index];

  someArr.push([element, person[element] + '']);
}

console.log(someArr);
