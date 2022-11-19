/**
 *
 * Print all the Multiplication tables with numbers from 1 to 10 
 */

function AllMultipleTablesTill(till) {
  let concatMe = '';
  for (let i = 1; i <= till; i++) {
    concatMe += Mult_i(i) + '-----------\n';
  }

  return concatMe;
}

function Mult_i(i) {
  let concatMe = '';

  for (let index = 1; index <= 10; index++) {
    const element = i;
    concatMe += `${element} X ${index} = ${element * index}\n`;
  }
  return concatMe;
}

console.log(AllMultipleTablesTill(10));
