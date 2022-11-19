// 1 . Get array of name from  given array of users

const users = [
  { id: 1, name: 'kimo', isActive: true, age: 20 },
  { id: 2, name: 'dimo', isActive: true, age: 23 },
  { id: 1, name: 'limo', isActive: false, age: 21 },
  { id: 2, name: 'timo', isActive: false, age: 22 },
];

// Way 1
users.forEach((element) => {
  // console.log('element ', element.name);
});

// Way 2
const names = [];
for (let index = 0; index < users.length; index++) {
  names.push(users[index].name);
}

// console.log(names);

// Way 3

const namesMap = users.map((user, i) => {
  return user.name;
});

// console.log(namesMap);

// 2 . Get back only Active users

// way 1
const onlyActives = [];
for (let index = 0; index < users.length; index++) {
  const element = users[index].isActive;

  if (element == true) {
    onlyActives.push(users[index]);
  }
}

// console.log('onlyActives : ', onlyActives);

// way 2

const filteredUsers = users.filter((user) => {
  return user.isActive != false;
});

// console.log('filteredUsers :', filteredUsers);
// console.log(
//   filteredUsers.map((user) => {
//     return user.name;
//   })
// );

// 3. Sort users by age descending

//  1 way

const sortDesc = users
  .sort((a, b) => b.age - a.age)
  .filter((user) => user.isActive != false)
  .map((user) => {
    return user.name;
  });
console.log(sortDesc);
// console.log(users.unshift({ name: 'sdfdsa' }));
// mutated
console.log(users);
