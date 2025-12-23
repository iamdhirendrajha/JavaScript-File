
const score = 400
console.log(score);           // 400

const run = new Number(100);
console.log(run);            // [Number: 100]

// Number  -------> TO ======> String
console.log(run.toString());      // explicit conversion      // '100'
// explicit conversion tab hota hai jab hum kisi value ko ek type se doosre type mai convert karte hain using built-in methods.
// isse kya hota hai ??
// yeh humein control deta hai ki hum kis type mai conversion karna chahte hain.
// yeh humare code ko zyada readable aur maintainable banata hai.
// yeh humein predictable results deta hai, kyunki hum explicitly specify kar rahe hain ki conversion kaise hona chahiye.
// yeh humare code mai errors aur bugs ko kam karta hai, kyunki hum clearly define kar rahe hain ki conversion kaise hona chahiye.
// yeh humare code ko zyada efficient banata hai, kyunki hum unnecessary conversions se bach rahe hain.


// Number  -------> TO ======> String and then length of that String :-
console.log("run.length = " + run.toString().length); // explicit conversion using toString() method   // 'run.length = 3'
// yeh bhi ek explicit conversion hai jisme hum number ko string mai convert kar rahe hain using toString() method.
// isse humare code mai clarity aati hai aur hum clearly define kar paate hain ki conversion kaise hona chahiye.



// Number  -------> TO ======> String with 2 decimal places :-
console.log("run.toFixed(2) = " + run.toFixed(2));    // explicit conversion using toFixed() method   // 'run.toFixed(2) = 100.00'
// yeh bhi ek explicit conversion hai jisme hum number ko string mai convert kar rahe hain with 2 decimal places using toFixed() method.
// isse humare code mai clarity aati hai aur hum clearly define kar paate hain ki conversion kaise hona chahiye.


// Number  -------> TO ======> String (implicit conversion)
console.log(run + "5"); // implicit conversion       // '1005'
// implicit conversion tab hota hai jab hum kisi number ko string ke sath concatenate karte hain.
// isse kya hota hai ??
// yeh JavaScript engine ko automatically type conversion karne deta hai.
// yeh humare code ko zyada concise aur likhne mai aasan banata hai.
// yeh humare code ko zyada flexible banata hai, kyunki hum alag-alag types ke sath kaam kar sakte hain bina explicit conversions ke.
// yeh kabhi-kabhi unexpected results de sakta hai, kyunki JavaScript engine automatically type conversion karta hai bina humari control ke.
// yeh humare code mai errors aur bugs la sakta hai, especially jab hum different types ke sath kaam kar rahe hote hain.
// yeh humare code ko thoda inefficient bana sakta hai, kyunki unnecessary conversions ho sakte hain jo performance ko affect karte hain.


// Number  -------> TO ======> Number (implicit conversion)
console.log(run - 50);   // implicit conversion       // 50
console.log(run - "50");   // implicit conversion     // 50
// yeh dono cases mai JavaScript engine automatically string "50" ko number 50 mai convert kar deta hai subtraction operation ke liye.
// isse humare code mai flexibility aati hai, lekin kabhi-kabhi yeh unexpected results bhi de sakta hai agar hum types ka dhyan na rakhein.
// isliye, implicit conversions ko samajhna aur dhyan se use karna zaroori hai taaki hum apne code mai bugs aur errors se bach sakein.



 
// Number  -------> TO ======> Boolean
console.log(Boolean(105565));      // explicit conversion      // true
console.log(Boolean(0));      // explicit conversion      // false
// yeh dono cases mai hum explicitly Number ko Boolean mai convert kar rahe hain using Boolean() function.
// isse humare code mai clarity aati hai aur hum clearly define kar paate hain ki conversion kaise hona chahiye.
// yeh humare code ko zyada predictable banata hai aur errors se bachata hai.
// yeh humare code ko zyada efficient banata hai kyunki unnecessary conversions se bachata hai.
// yeh humare code ko zyada readable aur maintainable banata hai.
// isliye, explicit conversions ko prefer karna chahiye jab bhi possible ho.


const otherNum = new Number(23.8966)
console.log(otherNum.toPrecision(3));   // explicit conversion using toPrecision() method   // '23.9'
// ya method number ko specified significant digits tak round karta hai aur usse string format mai return karta hai.

// yeh bhi ek explicit conversion hai jisme hum number ko string mai convert kar rahe hain with specified precision using toPrecision() method.
// isse humare code mai clarity aati hai aur hum clearly define kar paate hain ki conversion kaise hona chahiye.    

const otherNum2 = new Number(123.8966)
console.log(otherNum2.toPrecision(3));   // '124'

console.log(otherNum2.toPrecision(4));   // '123.9'

console.log(otherNum2.toPrecision(5));   // '123.90'

console.log(otherNum2.toPrecision(2));   // '1.2e+2'
console.log(otherNum2.toPrecision(1));    // '1e+2'
// yeh bhi ek explicit conversion hai jisme hum number ko string mai convert kar rahe hain with specified precision using toPrecision() method.

console.log(otherNum2.toExponential(4));  // explicit conversion using toExponential() method   // '1.2380e+2'
// ya method number ko exponential notation mai convert karta hai with specified number of digits after the decimal point and returns it as a string.

// yeh bhi ek explicit conversion hai jisme hum number ko string mai convert kar rahe hain in exponential notation using toExponential() method.
// isse humare code mai clarity aati hai aur hum clearly define kar paate hain ki conversion kaise hona chahiye.    

const hundreds = 1000000;
console.log(hundreds.toLocaleString());   // explicit conversion using toLocaleString() method   // '1,000,000'
// ya method number ko locale-specific string representation mai convert karta hai, jisme appropriate separators use hote hain jaise ki commas for thousands.
// yeh bhi ek explicit conversion hai jisme hum number ko string mai convert kar rahe hain in locale-specific format using toLocaleString() method.
// isse humare code mai clarity aati hai aur hum clearly define kar paate hain ki conversion kaise hona chahiye.    
// yeh humare code ko zyada readable aur maintainable banata hai.

// OR
console.log(hundreds.toLocaleString('hi-IN')); // '10,00,000'  (Indian format)
//OR
console.log(hundreds.toLocaleString('de-DE')); // '1.000.000'  (German format)
// yeh dono examples mai hum number ko different locale-specific formats mai convert kar rahe hain using toLocaleString() method with specified locale.



// ************************MATHS*******************************


console.log(Math);          // Math object with properties and methods for mathematical constants and functions 
// Math object ek built-in object hai jo mathematical constants aur functions provide karta hai.
// isme hum mathematical operations easily perform kar sakte hain without creating our own functions.
// yeh humare code ko zyada efficient aur reliable banata hai kyunki yeh optimized algorithms use karta hai.



console.log(Math.abs(-5));   // 5
// abs() method number ka absolute value return karta hai, yani ki negative sign hata deta hai.
// or ya shrif negative number ko positive mai convert karta hai.
// positive number ko negative mai change nhi karta hai kyuki positive number khud mai hi ek absolute value hota hai.
// yeh useful hai jab humein kisi number ka magnitude chahiye bina uske sign ke.
// example: distance calculation, error measurement, etc.



console.log(Math.round(4.2));   // 4
console.log(Math.round(4.6));   // 5
// round() method number ko nearest integer mai round karta hai.
// yeh useful hai jab humein kisi number ko integer form mai chahiye without decimal places.
// example: counting items, indexing arrays, etc.



console.log(Math.ceil(5.1));    // 6
// always gives higher value 
// ceil() method number ko nearest higher integer mai round karta hai.
// decimal mai kuch bhi value raha yeh hamesha higher integer return karta hai.
// yeh useful hai jab humein kisi number ko integer form mai chahiye without decimal places, aur humein higher value chahiye.
// example: allocating resources, calculating required units, etc.



console.log(Math.floor(5.9));   // 5
// always gives lower value
// floor() method number ko nearest lower integer mai round karta hai.
// decimal mai kuch bhi value raha yeh hamesha lower integer return karta hai.
// yeh useful hai jab humein kisi number ko integer form mai chahiye without decimal places, aur humein lower value chahiye.
// example: pagination, array indexing, etc.



console.log(Math.sqrt(25));  // 5
console.log(Math.sqrt(64));  // 8
console.log(Math.sqrt(16));  // 4
// sqrt() method number ka square root return karta hai.
// yeh useful hai jab humein kisi number ka original value chahiye jo uske square ke equal ho.
// example: geometry, physics, statistics, etc.



console.log(Math.pow(2, 3));   // 8
console.log(Math.pow(4, 2));   // 16
// Syntax: Math.pow(base, exponent);
// pow() method base number ko exponent ke power tak raise karta hai.
// yeh useful hai jab humein kisi number ka power calculate karna ho.
// example: compound interest calculation, exponential growth, etc.



console.log(Math.min(3, 5, 1, 8, -2));   // -2
console.log(Math.max(3, 5, 1, 8, -2));   // 8
// min() method given numbers mai se sabse chhota number return karta hai.
// max() method given numbers mai se sabse bada number return karta hai.
// yeh dono methods useful hain jab humein kisi set of numbers mai se extreme values chahiye.
// example: finding lowest and highest scores, temperature ranges, etc.


console.log(Math.sin(Math.PI / 2));   // 1
console.log(Math.cos(0));              // 1
// sin() method angle ka sine value return karta hai.
// cos() method angle ka cosine value return karta hai.
// yeh dono methods useful hain jab humein trigonometric calculations karni ho.
// example: geometry, physics, engineering, etc.

console.log(Math.log(Math.E));   // 1
// ya Math.log hai kya?  
// ya Math.log() method hai jo natural logarithm return karta hai , iska matlab hai ki base e ka logarithm , matlab ki e^x = y , to loge y = x or ln(y) = x 
// jese ki Math.log(Math.E) = 1 , kyuki e^1 = e
// log() method number ka natural logarithm return karta hai.
// yeh useful hai jab humein logarithmic calculations karni ho.
// example: exponential growth, compound interest, etc.


console.log(Math.PI);      // 3.141592653589793
console.log(Math.E);       // 2.718281828459045
// Math.PI constant pi ka value provide karta hai, jo circle ke circumference aur diameter ke ratio ko represent karta hai.
// Math.E constant e ka value provide karta hai, jo natural logarithms aur exponential functions mai use hota hai.
// yeh constants useful hain jab humein mathematical calculations mai accurate values chahiye.
// example: geometry, calculus, statistics, etc.

console.log(Math.PI.toFixed(5));   // '3.14159'
console.log(Math.E.toFixed(5));    // '2.71828'
// toFixed() method number ko string mai convert karta hai with specified number of decimal places.
// yeh useful hai jab humein kisi number ko specific decimal places tak format karna ho.
// example: financial calculations, measurements, etc.


console.log(Math.random());   // random number between 0 (inclusive) and 1 (exclusive)
// random() method ek pseudo-random number generate karta hai between 0 (inclusive) and 1 (exclusive).
// yeh useful hai jab humein random values chahiye for simulations, games, sampling, etc.
// example: generating random IDs, shuffling arrays, random selections, etc.

console.log(Math.random()*10+1);  // random number between 1 and 10

console.log((Math.random()*10)+1); // random number between 1 and 10
// dono expressions same hain aur dono hi 1 se 10 ke beech ka random decimal number generate karte hain.

console.log(Math.floor(Math.random()*10)+1);  // random integer value between 1 and 10
// ya expression 1 se 10 ke beech ka random integer generate karta hai.
// isme pehle Math.random() se 0-1 ke beech ka random decimal number milta hai, fir usse 10 se multiply karke 0-10 ke beech ka number banate hain,
// fir Math.floor() se usse nearest lower integer mai round karte hain, jisse 0-9 ke beech ka integer milta hai,
// aur finally 1 add karke usse 1-10 ke beech ka integer bana dete hain.

// OR

// in steps:
// Step 1: Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// Step 2: Multiplying the result by 10 scales it to a range of 0 (inclusive) to 10 (exclusive).
// Step 3: Math.floor() rounds down the scaled number to the nearest integer, resulting in a range of 0 to 9 (inclusive).
// Step 4: Adding 1 shifts the range up by one, resulting in a final range of 1 to 10 (inclusive).

// is tarah se hum kisi bhi range ke beech ka random integer generate kar sakte hain using Math.random() aur Math.floor() methods se .
// example: random selections, games, simulations, etc.

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20
// ya expression 10 se 20 ke beech ka random integer generate karta hai.
// isme pehle Math.random() se 0-1 ke beech ka random decimal number milta hai, fir usse (max - min + 1) se multiply karke 0-(max-min+1) ke beech ka number banate hain,
// fir Math.floor() se usse nearest lower integer mai round karte hain, jisse 0-(max-min) ke beech ka integer milta hai,
// aur finally min add karke usse min-max ke beech ka integer bana dete hain.
