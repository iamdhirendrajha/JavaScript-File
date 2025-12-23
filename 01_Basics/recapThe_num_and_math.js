const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);       // [Number: 100]
console.log(typeof balance); // object

console.log(balance.toString().length);     // 3
console.log(balance.valueOf());            // 100
console.log(balance.toFixed(1));          // 100.0

const otherNumber = 123.8966


console.log(otherNumber.toPrecision(4));        // 123.9
console.log(otherNumber.toPrecision(3));        // 124
console.log(otherNumber.toPrecision(2));        // 1.2e+2
console.log(otherNumber.toFixed(2));           // 123.90

const hundreds = 1000000
console.log("In Hindi counting terms :",hundreds.toLocaleString('hi-IN'));       // 10,00,000
console.log("In Indian counting terms :",hundreds.toLocaleString('en-IN'));        // 10,00,000
console.log("In US counting terms :",hundreds.toLocaleString('en-US'));        // 1,000,000      
console.log("In German counting terms :",hundreds.toLocaleString('de-DE'));       // 1.000.000
console.log("In Arabic counting terms :",hundreds.toLocaleString('ar-EG'));       // ١٬٠٠٠٬٠٠٠
console.log("In Chinese counting terms :",hundreds.toLocaleString('zh-Hans-CN-u-nu-hanidec'));       // 一,〇〇〇,〇〇〇
console.log("In Japanese counting terms :",hundreds.toLocaleString('ja-JP-u-nu-hanidec'));       // 一,〇〇〇,〇〇〇
console.log("In French counting terms :",hundreds.toLocaleString('fr-FR'));       // 1 000 000
console.log("In Italian counting terms :",hundreds.toLocaleString('it-IT'));       // 1.000.000
console.log("In Spanish counting terms :",hundreds.toLocaleString('es-ES'));       // 1.000.000
console.log("In Russian counting terms :",hundreds.toLocaleString('ru-RU'));       // 1 000 000
console.log("In Portuguese counting terms :",hundreds.toLocaleString('pt-PT'));       // 1 000 000
console.log("In Dutch counting terms :",hundreds.toLocaleString('nl-NL'));       // 1.000.000
console.log("In Korean counting terms :",hundreds.toLocaleString('ko-KR'));       // 1,000,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);                      // Math object
console.log(Math.abs(-4));              // 4
console.log(Math.round(4.6));           // 5
console.log(Math.ceil(4.2));            // 5
console.log(Math.floor(4.9));           // 4
console.log(Math.min(4, 3, 6, 8));      // 3
console.log(Math.max(4, 3, 6, 8));      // 8    

console.log(Math.random());             // random number between 0 and 1
console.log((Math.random()*10) + 1);    // random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1);          // random integer between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);             // random integer between 10 and 20

console.log(Math.sqrt(144));            // 12

console.log(Math.pow(3, 4));              // 81
console.log(3**4);                        // 81 
// both are same 
// Math.pow(base, exponent)
// base**exponent

console