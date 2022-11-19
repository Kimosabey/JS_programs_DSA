console.log('RegexJS');

var someSrt = `The fat cat ran down the street.
It was searching for a mouse to eat rerere.`;

/**
 * Expression Flags :
 *
 * global - g
 * case insensitve - i
 * multiline - m
 * single line - s
 * unicode - u
 * sticky - y
 */

var pattern1 = /\w{4,5}/g;
var pattern2 = /[fc]at/g;
var pattern3 = /\wou/g;
var pattern4 = /[a-c]/g;
var pattern5 = /(t|T)he/g;
var pattern6 = /(t|e|r){2,3}\./g;
var pattern7 = /(re){2,3}/g;
var pattern8 = /^The/g; //Starting
var pattern9 = /\.$/gm; //Ending + multiline

// lookAhead / preceeded by
var pattern10 = /(?<=[tT]he)./g;

// lookBehind

var pattern11 = /(?![tT]he)./g;

// Phone Number Regex
var PhoneNumber1 = '1234567890';
var PhoneNumber2 = '123-456-7890';
var PhoneNumber3 = '123 456 7890';
var PhoneNumber4 = '(123) 456-7890';
var PhoneNumber5 = '+1 123 456-7890';

var pattern12 = /\d{3}-?\d{3}-?\d{4}/g;
var pattern13 = /\d{3}[ -]?\d{3}[ -]?\d{4}/g;

// match and group

var pattern14 = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/g;

var pattern15 = /\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm;


var pattern16 = /((\+1)[ -])?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm;
//----------------------------------------------
console.log(PhoneNumber5.match(pattern16));
console.log(PhoneNumber5.search(pattern16));
