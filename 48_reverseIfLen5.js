

// my way 
function spinWords(string) {
  let ifOneWord = string.split(" ").length


  return string.split(" ").map((word) => {


    let ConcatMe = "";
    if (word.length >= 5) {
      if (ifOneWord === 1) {
        ConcatMe += word.split("").reverse().join("")
      } else { ConcatMe += " " + word.split("").reverse().join("") }



    } else {
      ConcatMe += " " + word
    }

    return ConcatMe


  }).join("")



}




console.log(spinWords("Seriously this is the last one"))
console.log(spinWords("Welcome"))
console.log(spinWords("Just kidding there is still one more"))

// 2nd Short way

function spinWords2(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
console.log("--------------------")

console.log(spinWords2("Seriously this is the last one"))
console.log(spinWords2("Welcome"))
console.log(spinWords2("Just kidding there is still one more"))