let inputarr = [100, 2, 4, 6, 1000, 22, 99];

// 1 Way + Temp way +  nested for loops same parts

function BubbleSort1() {
  for (let i = 0; i < inputarr.length; i++) {
    for (let j = 0; j < inputarr.length; j++) {
      if (inputarr[j] > inputarr[j + 1]) {
        let temp = inputarr[j];
        inputarr[j] = inputarr[j + 1];
        inputarr[j + 1] = temp;
      }
    }
  }
  return console.log(inputarr);
}

function BubbleSort2() {
  for (let i = 0; i < inputarr.length; i++) {
    for (let j = 0; j < inputarr.length; j++) {
      if (inputarr[j] > inputarr[j + 1]) {
        [[inputarr[j], inputarr[j + 1]]] = [inputarr[j + 1], inputarr[j]];
      }
    }
  }
  return console.log(inputarr);
}

BubbleSort1();
BubbleSort2();
