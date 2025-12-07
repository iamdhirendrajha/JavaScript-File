/*
// ********Comparison Operators**********
// type coercion in comparision
console.log(2 > 1);    // true      
console.log(2 >= 1);    // true
console.log(2 < 1);    // false     
console.log(2 == 1);    // false     
console.log(2 != 1);    // true 
console.log(2 === 1);   // false
console.log(2 !== 1);   // true
*/

/*
// **********Equality Operators**********
// type coercion in equality
console.log(2 == "2");   // true (coercion: "2" becomes 2)
console.log(2 === "2");  // false (no coercion: different types)

// Loose Equality (==) vs Strict Equality (===)
// == performs type coercion: JavaScript converts "2" (string) to 2 (number) before comparing, so they're equal
// === performs strict comparison: No type conversion happens, so 2 (number) and "2" (string) are different types and therefore not equal

//Type Conversion in Comparison Operators
console.log("2" > 1); // true
console.log("2" < 1); // false
// When using comparison operators like >, JavaScript coerces both operands to numbers:
// "2" becomes 2 (number)
// Then 2 > 1 evaluates to true
*/

/*

// **********Type Conversion in Comparision Operators**********
// type conversion in comparision
console.log("2" > 1); // true
console.log("2" < 1); // false
console.log("2" >= 1); // true
console.log("2" <= 1); // false
console.log("2" == 1); // false
console.log("2" != 1); // true   
console.log("2" === 1); // false
console.log("2" !== 1); // true
console.log("2" == "2"); // true
console.log("2" > "12"); // true
console.log("2" < "12"); // false
*/

// console.log("2" > 1);
// console.log("02" > 1);

// **********Special Cases in Comparision Operators**********
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false 
// because null only equals to undefined , not to any other value , so null == 0 is false , but in other comparision it is converted to 0 , so null > 0 and null < 0 are false


console.log(null <= 0); // true  
console.log(null >= 0); // true
//  because null is converted to 0 , so 0 <= 0 is true , hence null <= 0 is true , but null >= 0 is also true because 0 >= 0 is true , so both are true


// **********Special Cases in Comparision Operators**********
console.log(undefined > 0); // false  
// undefined is not converted to any number in comparision , so it is false , hence undefined > 0 is false .
console.log(undefined < 0); // false 
// undefined is not converted to any number in comparision , so it is false , hence undefined < 0 is false .

console.log(undefined == 0); // false 
// undefined only equals to null , not to any other value , so undefined == 0 is false , hence undefined == 0 is false .
console.log(undefined >= 0); // false 
// undefined is not converted to any number in comparision , so it is false , hence undefined >= 0 is false .


// ===================Strict Equality Operator with Type Conversion==================

console.log("2" === 2); // false
// Type coercion does not occur with strict equality (===), so the types must match for the comparison to be true.
// Here, "2" is a string and 2 is a number, so they are not strictly equal.     

// ===================Strict Inequality Operator with Type Conversion==================
console.log("2" == 2);  // true
// Type coercion occurs with loose equality (==), so JavaScript converts "2" (string) to 2 (number) before comparing, making them equal.
// Here, "2" becomes 2, so they are considered equal.


// ===================Strict Inequality Operator without Type Conversion==================  
// Type coercion does not occur with strict inequality (!==), so the types must match for the comparison to be false.   
// Here, "2" is a string and 2 is a number, so they are not strictly equal.
// Hence, "2" !== 2 evaluates to true.
console.log("2" !== 2);  // true


// ===================Loose Inequality Operator with Type Conversion==================  
// Type coercion occurs with loose inequality (!=), so JavaScript converts "2" (string) to 2 (number) before comparing, making them equal.
// Here, "2" becomes 2, so they are considered equal.
// Hence, "2" != 2 evaluates to false.
console.log("2" != 2);   // false




