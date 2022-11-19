var arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('arrNum.length :', arrNum.length - 1);

var carryArr = [];

for (let index = arrNum.length - 1; index >= 0; index--) {
  const element = arrNum[index];
  console.log(element);
  carryArr.push(element)
}


console.log(carryArr)
