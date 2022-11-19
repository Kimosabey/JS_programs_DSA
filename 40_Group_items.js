// 2. Group items on the basis of age of given array of object

let people = [
  { name: 'Alice', age: 21 },
  {
    name: 'Max',
    age: 20,
  },
  { name: 'Jane', age: 20 },
];

let dummyObj = {};

function GroupByItemsAge(ArrofObj) {
  for (let i = 0; i < ArrofObj.length; i++) {
    if (dummyObj[ArrofObj[i].age]) {
      dummyObj[ArrofObj[i].age].push(ArrofObj[i]);
    } else {
      dummyObj[ArrofObj[i].age] = [ArrofObj[i]];
    }
  }

  return dummyObj;
}

console.log(GroupByItemsAge(people));
