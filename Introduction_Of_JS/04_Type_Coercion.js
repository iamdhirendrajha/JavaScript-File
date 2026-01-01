// What is Type Coercion in JavaScript?

//JavaScript is a loosely typed or dynamic language, which means it automatically converts types when necessary, making it easier for developers to work with different data types in expressions, comparisons, and operations. However, this flexibility can sometimes lead to unexpected results if you're not careful.

/*
Type Coercion in JavaScript:--->

In JavaScript, Type Coercion happens when JavaScript automatically changes one type of value into another. Sometimes, this automatic conversion can cause unexpected results if you’re not aware of how it works.


Automatic Conversion: When required, the JavaScript automatically converts required data types.
Works with Three Types: String, Number, and Boolean coercion.
Can Lead to Unexpected Results: If they are not handled properly, they may cause unintended bugs.
Implicitly Occurs: Automatically converts the type of the value from one to another.


console.log(5 + "10");

Output:
"510"

In this example:
JavaScript converts the number 5 into a string.
Concatenates it with "10".




How Type Coercion Works?
In JavaScript, type coercion mainly occurs in the three ways:


String Coercion:-->
It occurs when the string is combined with the non-string using (+). JavaScript converts numbers and booleans into strings before concatenation.


console.log("5" + 2); 
console.log("5" + true);

Output:
"52"
"5true"

The number 2 is coerced to a string and then concatenated with the string "5", resulting in "52".
The boolean true is coerced into the string "true", and the two strings are concatenated.



Number Coercion:-->
In the number coercion, JavaScript converts the string into a number before operating.

console.log("5" - 2); 
console.log("5" * 2); 
console.log("10" / "2");

Output:
3
10
5

The string is coerced into a number before performing the arithmetic operation.




Boolean Coercion:-->
JavaScript treats the true value as '1' and the false value as '0'.

console.log(Boolean("hello")); 
console.log(Boolean(0)); 
console.log(Boolean([]));

Output
true
false
true


Non-empty strings are coerced to true, while 0 is coerced to false.




Common Issues of Type Coercion:--->

Comparing Different Data Types:==>

Comparison Operator(= =), allows coercion due to which the unexpected conversions occur. To avoid this, we should use the strict equality(= = =) operator.

console.log(0 == "0"); 
console.log(0 == false); 
console.log(" " + 0 == 0);

Output:
true
true
true



Operations on null and undefined:-->
Null and undefined behave unexpectedly.

console.log(null == undefined); 
console.log(null === undefined); 
console.log(null + 1);

Output:
true
false
1




NaN Comparisons:--->
NaN is not equal to itself, so checking with isNaN() is the best way to detect it.

console.log(NaN == NaN); 
console.log(isNaN(NaN));

Output:
false
true
In this example, NaN is not equal to itself, so the isNaN() function is the preferred way to check for NaN.


Best Practices to Avoid Type Coercion Issues:+++>


Use === Instead of ==
When we use strict equality, instead of the comparison operator, it prevents unnecessary types of coercion.

console.log(5 === "5");

Output
false
=== ensures no implicit type conversion occurs and both values must be of the same type.

Use Explicit Conversion:--->
Explicit conversion converts the value manually due to which there are fewer chances of errors in the code.

console.log(Number("123"));

Output:
123
This ensures that you're working with the correct type, reducing the chance of errors during operations.



Avoid False Value Confusion:===>


Always check for null, undefined, or empty strings explicitly.

if (value !== null && value !== undefined) {
    console.log("Value exists");
}

This ensures that only non-null and defined values are considered valid.



Use parseInt() and parseFloat() for Number Conversion:===>

console.log(parseInt("42px")); 
console.log(parseFloat("3.14abc"));

Use parseInt() and parseFloat() for Number Conversion



console.log(parseInt("42px")); 
console.log(parseFloat("3.14abc"));

Output
42
3.14

This will parse the number part of a string, ensuring a valid numeric conversion.



Handle NaN Properly:-->

Use isNaN() to check if a value is NaN instead of comparing it directly.

f (isNaN(value)) {
    console.log("Invalid number");
}
    
This ensures you're correctly detecting NaN and handling it appropriately.


*/