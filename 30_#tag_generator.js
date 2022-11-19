/**
 * The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
 */

function generateHashtag(str) {
  let flag = false;

  if (str?.length > 140 || str === undefined) {
    flag = false;
  } else {
    let strArr = str.split(' ');
    let concatMe = '#';
    strArr.forEach((ele) => {
      console.log(ele);
      
      let getFirstEle = ele[0].toUpperCase();
      concatMe += getFirstEle + ele.slice(1);
    });

    flag = concatMe;
  }

  return flag;
}

console.log(generateHashtag('Do We have    A Hashtag'));
// console.log(generateHashtag());
// console.log(generateHashtag(' '.repeat(200)));

// console.log(typeof "")
