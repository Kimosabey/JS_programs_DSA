// Function Hoisted TOP and Function Express cant hoisted at TOP

foo();
bar();

function foo() {
  console.log('I AM foo');
}

const bar = function () {
  console.log('I AM bar');
};
