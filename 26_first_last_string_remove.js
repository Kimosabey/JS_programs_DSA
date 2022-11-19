function removeChar(str) {
  //You got this!


  return [...str].slice(1, [...str].length - 1).join("")
}

console.log(removeChar('scissors'));
