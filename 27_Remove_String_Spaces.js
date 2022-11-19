function noSpace(x) {
  let xArr = [...x];

  let noSpaceMe = '';
  for (let i = 0; i < x.length; i++) {
    if (xArr[i] !== ' ') {
      noSpaceMe += xArr[i];
    }
  }

  console.log(noSpaceMe);
}

noSpace("Kimo Sabey!");
