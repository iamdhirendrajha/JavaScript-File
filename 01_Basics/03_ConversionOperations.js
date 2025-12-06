let score = "dhirendra"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// Null => 0
// Undefined ==> NaN

let isLoggedIn = "dhirendra"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "dhirendra" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3 
let negValue = -value
// console.log(negValue); ==> -3

// ++value
// console.log(value);  ==> 4 
 
// console.log(2+2);  
// console.log(2-2);  
// console.log(2*2); 
// console.log(2**3); 
// console.log(2/3); 
// console.log(2%3); 

let str1 = "hello"
let str2 = " dhirendra"

let str3 = str1 + str2

// *******Merge two strings********
// console.log(str3); ==> hello dhirendra

// **********Addition Operator (+)************
// console.log("hello " + 5);  ==> hello 5
// console.log("hello " + true);  ==> hello true
 
 
// console.log("1" + 2);      ==> 12    
// console.log(1 + "2");      ==> 12
// console.log("1" + 2 + 2);      ==> 122
// console.log(1 + 2 + "2");   ==> 32 

// console.log( (3 + 4) * 5 % 3);  ==> 2

/*
// ************Subtraction, Multiplication, Division Operators (-, *, /)************
console.log("5" - "2");  ==> 3
console.log("5" - 2);    ==> 3
console.log(5 - "2");    ==> 3    
 

console.log("5" * "2");  ==> 10
console.log("5" * 2);    ==> 10
console.log(5 * "2");    ==> 10

console.log("6" / "2");  ==> 3
console.log("6" / 2);    ==> 3
console.log(6 / "2");    ==> 3
console.log("6" / "2abc");  ==> NaN

console.log("hello" - "2");  ==> NaN
console.log("hello" + "2");  ==> hello2
console.log("hello" * "2");  ==> NaN
console.log("hello" / "2");  ==> NaN 

console.log("hello" % "2");  ==> NaN
console.log("hello" - 2);  ==> NaN
console.log("hello" + 2);  ==> hello2
console.log("hello" * 2);  ==> NaN
console.log("hello" / 2);  ==> NaN 
console.log("hello" % 2);  ==> NaN
*/

/*
// Boolean Conversion in Arithmetic Operations ==> 
console.log(true + true);   ==> 2
console.log(true + false);  ==> 1
console.log(false + false); ==> 0

console.log(true - false);  ==> 1
console.log(false - true);  ==> -1

console.log(true * false);  ==> 0
console.log(true * true);   ==> 1
console.log(false * false); ==> 0

console.log(true / true);   ==> 1
console.log(true / false);  ==> Infinity
console.log(false / true);  ==> 0
console.log(false / false); ==> NaN

console.log(true % true);   ==> 0
console.log(true % false);  ==> NaN
console.log(false % true);  ==> 0
console.log(false % false); ==> NaN
*/


/*
// ***********Don't use these unary plus and minus on boolean values************
console.log(+true);   ==> 1 
console.log(+false);  ==> 0  


console.log(true);   ==> true
console.log(!true);  ==> false
console.log(!!true); ==> true

console.log(+true);   ==> 1 
console.log(+"true");  ==> NaN


console.log(false); ===> false
console.log(+false);  ==> 0
console.log(+"false");  ==> NaN 


console.log(true+);  // ERROR         
console.log(false+);  // ERROR  

console.log(+""); // 0

*/

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1, num2, num3);  ==> 4 4 4

// ************Increment and Decrement Operators************

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion