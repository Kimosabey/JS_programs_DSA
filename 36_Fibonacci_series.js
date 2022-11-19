// Print the first 10 Fibonacci numbers without recursion

const Fibonacci = (range) => {
  let f0 = 0;
  let f1 = 1;
  let f2;

  let arr = [f0, f1];

  for (let index = 2; index < range; index++) {
    f2 = f0 + f1;
    arr.push(f2);

    f0 = f1;
    f1 = f2;
  }

  return arr;
};

console.log(Fibonacci(5));
