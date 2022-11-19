var str = ')(()))';

console.log([...str]);

const count = [...str].reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});



console.log(
  Object.values(count).map((i) => {
    let bool = 'Not Valid';
    if (i % 2 == 0) {
      bool = 'Valid';
    }
    return bool;
  })
);
