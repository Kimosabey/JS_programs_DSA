/**----------------------------
 * Triangle Pattern - I
 *  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

 */

let rows = 5;
let pattern = '';

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += j;
//   }
//   pattern += '\n';
// }

/**------------------------------
 * Triangle Pattern - II
 *     1
       2 2
       3 3 3
       4 4 4 4
       5 5 5 5 5

 */

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += i;
//   }
//   pattern += '\n';
// }

/**------------------------------------
 * Triangle Pattern - III    
 * 1
   2 3
   4 5 6
   7 8 9 10

 */

let variable = 1;

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += variable + ' ';
//     variable++;
//   }
//   pattern += '\n';
// }

/**---------------------------------------
 * Reverse Triangle - I 
 * 12345
   1234
   123
   12
   1

 * 
 *     
 */

// for (let i = 1; i <= rows; i++) {
//   for (let num = 1; num <= rows - i; num++) {
//     pattern += num + ' ';
//   }
//   pattern += '\n';
// }

/**-----------------------------------------
 * Number Pyramid Pattern - I
 *  1
   123
  12345
 1234567
123456789

 */
// outer loop runs for `rows` no. of times
// for (let i = 1; i <= rows; i++) {
//   // Inner Loop - I -> for the spaces
//   for (let space = 1; space <= rows - i; space++) {
//     pattern += '*';
//   }

//   // Inner Loop - II -> for the number
//   for (let num = 1; num <= 2 * i - 1; num++) {
//     pattern += num;
//   }

//   pattern += '\n';
// }

/**
 * Number Pyramid Pattern - II
 * 
 * 
 */

console.log(pattern);
