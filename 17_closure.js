// Create a counter dunction which has increment and getValue functionality

// example 1
function OuterFunc(x) {
  let z = 5;

  return function innerFunc(y) {
    return x + y + z;
  };
}

const addXY = OuterFunc(3);
console.log(addXY(2));
console.log(OuterFunc(3)(2));
// example 2

const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log('counter:', counter);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
