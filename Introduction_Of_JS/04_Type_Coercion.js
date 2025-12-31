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