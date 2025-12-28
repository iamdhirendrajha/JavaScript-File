/*

JavaScript Numbers

comments
JavaScript numbers are primitive data types, and unlike other programming languages, you don't need to declare different numeric types like int, float, etc. JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. This format stores numbers in 64 bits:

0-51 bits store the value (fraction)
52-62 bits store the exponent
63rd bit stores the sign


Numeric Types in JavaScript
In JavaScript, numbers play an important role, and understanding their behavior is essential for effective programming. Let’s explore the various aspects of numeric types in JavaScript.

1. The Only Numeric Type
As we know, JavaScript has only one numeric type: the double-precision 64-bit binary format IEEE 754, which means that it doesn’t differentiate between integers and floating-point numbers explicitly. Instead, it uses a unified approach for all numeric values.

Integers and floating-point numbers are both represented using this format.
The numeric precision is 53 bits, allowing for an accurate representation of integer values ranging from -2^53 + 1 to 2^53 - 1.



2. Scientific Notation
JavaScript allows writing extra-large or extra-small numbers using scientific (exponent) notation.

let a  =  156e5;
let b =   156e-5;
console.log(a);
console.log(b);

Output:
15600000
0.00156



3. Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let a = 999999999999999;
let b = 9999999999999999;
console.log(a);
console.log(b);

Output
999999999999999
10000000000000000



4. Floating Point Precision :
Floating point arithmetic is not always 100% accurate due to binary representation limitations.

Example

let x = 0.22 + 0.12;   //x will be 0.33999999999999997
To solve this problem, multiply and divide:

let x = (0.22 * 10 + 0.12 * 10) / 10;    // x will be 0.34



let x = 0.22 + 0.12;
let y = (0.22 * 10 + 0.12 * 10) / 10;
console.log(x);
console.log(y);

Output : 
0.33999999999999997
0.34



5. Adding Numbers and Strings
JavaScript uses the `+` operator for both addition and concatenation.
Numbers are added, when strings are concatenated.

// Adding two numbers
let x = 10;
let y = 15;
let z = x + y;
console.log(z);
​
// Concatenating two strings:
​
let a = "10";
let b = "30";
let c  = a + b;
console.log(c);

Output :
25
1030




6. Numeric Strings
JavaScript automatically converts the numeric strings to numbers in most operations like.

let x  = "100" / "10";
let y  = "100" * "10";
let z = "100" - "10";
console.log(x);
console.log(y);
console.log(z);

Output
10
1000



Number Literals
The types of number literals You can use decimal, binary, octal, and hexadecimal.

1. Decimal Numbers
JavaScript Numbers does not have different types of numbers(ex: int, float, long, short) which other programming languages do. It has only one type of number and it can hold both with or without decimal values

let a=33;
let b=3.3;
console.log(a);
console.log(b);


Output
33
3.3


