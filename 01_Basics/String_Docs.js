/*
A JavaScript String is a sequence of characters, typically used to represent text.

In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character.
Like Java and Python, strings in JavaScript are immutable.

*/



// Create using Literals - Recommended
// We can either use a single quote or a double quote to create a string. We can use either of the two, but it is recommended to be consistent with your choice throughout your code.

// Using Single Quote
let t1 = 'abcd';
console.log(t1);
​
// Using Double Quote
let t2 = "abcd";
console.log(t2);

/*
Output :
abcd
abcd
*/


/*
Basic Operations on JavaScript Strings ------>>

1. Finding the length of a String: 
You can find the length of a string using the length property.

let s = 'JavaScript';
let len = s.length;
​
console.log("String Length: " + len);

Output
String Length: 10


*/

let s = 'JavaScript';
let len = s.length;
console.log("String Length: " + len);



/*
**************************************************
2. String Concatenation
You can combine two or more strings using + Operator.

let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;
​
console.log("Concatenated String: " + res);

Output
Concatenated String: JavaScript

*********************************************
*/

let p1 = 'Java';
let p2 = 'Script;'
let res = p1 + p2;
​console.log("Concatenated String: "+ res);



/*
3. Escape Characters
We can use escape characters in string to add single quotes, dual quotes, and backslash.

\' - Inserts a single quote
\" - Inserts a double quote 
\ - Inserts a backslash


const s1 = "\'GfG\' is a learning portal";
const s2 = "\"GfG\" is a learning portal";
const s3 = "\\GfG\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);

Output
'GfG' is a learning portal
"GfG" is a learning portal
\GfG\ is a learning portal

*/
const s1 = "\'GfG\' is a learning portal";
const s2 = "\"GfG\" is a learning portal";
const s3 = "\\GfG\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);



/*
4. Breaking Long Strings:
Using a backslash (\) to break a long string is not recommended, as it is not supported in strict mode. Instead, use template literals or string concatenation.


const s = "'GeeksforGeeks' is \
a learning portal";
​
console.log(s);


Output :
'GeeksforGeeks' is a learning portal

*************************************************

Note: This method might not be supported on all browsers. A better way to break a string is by using the string addition.

const s = "'GeeksforGeeks' is a"
    + " learning portal";
​
console.log(s);

Output
'GeeksforGeeks' is a learning portal

*/

const f = "'GeeksforGeeks' is \
a learning portal";

console.log(f);

// OR

const g = "'GeeksforGeeks' is a"
    + " learning portal";
​
console.log(g);



/*
5. Find Substring of a String:--
We can extract a portion of a string using the substring() method.

let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);
​
console.log(s2);
*/

let x1 = 'JavaScript Tutorial';
let x2 = s1.substring(0, 10);
​
console.log(x2);

// Output :  JavaScript



/*
6. Convert String to Uppercase and Lowercase :--
Convert a string to uppercase and lowercase using toUpperCase() and toLowerCase() methods.

let s = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();
​
console.log(uCase);
console.log(lCase);
*/

let d = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();
​
console.log(uCase);
console.log(lCase);


// Output:
// JAVASCRIPT
// javascript



/*
7. String Search in JavaScript

Find the first index of a substring within a string using indexOf() method.

let s1 = 'def abc abc';
let i = s1.indexOf('abc');
​
console.log(i);

Output
4
*/

let k1 = 'def abc abc';
let i = s1.indexOf('abc');
​
console.log(i);      // 4




/*
8. String Replace in JavaScript :---

Replace occurrences of a substring using the replace() method. By default, replace() only replaces the first occurrence. To replace all occurrences, use a regular expression with the g flag.


let s1 = 'Learn HTML at GfG and HTML is useful';
let s2 = s1.replace(/HTML/g, 'JavaScript');
​
console.log(s2);

Output
Learn JavaScript at GfG and JavaScript is useful
*/

let g1 = 'Learn HTML at GfG and HTML is useful';
let g2 = g1.replace(/HTML/g, 'JavaScript');
​
console.log(g2);      // Learn JavaScript at GfG and JavaScript is useful



/**
 * 9. Trimming Whitespace from String :--
Remove leading and trailing whitespaces using trim() method.

let s1 = '    Learn JavaScript       ';
let s2 = s1.trim();
​
console.log(s2);

Output
Learn JavaScript 
 * 
 */

let sd1 = '    Learn JavaScript       ';
let sd2 = sd1.trim();
​
console.log(sd2);



/*
10. Access Characters from String :--
Access individual characters in a string using bracket notation and charAt() method.


let s1 = 'Learn JavaScript';
let s2 = s1[6];
console.log(s2);
​
s2 = s1.charAt(6);
console.log(s2);

Output:-
J
J
*/

let sd11 = 'Learn JavaScript';
let sd12 = sd1[6];
console.log(sd12);
​
s2 = s1.charAt(6);
console.log(s2);



/*

11. String Comparison in JavaScript:--
There are some inbuilt methods that can be used to compare strings such as the equality operator and another like localeCompare() method.


let s1 = "Ajay"
let s2 = new String("Ajay");
​
console.log(s1 == s2);  // true (type coercion)
console.log(s1 === s2); // false (strict comparison)
console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)

Output
true
false
0


Note: The equality operator (==) may return true when comparing a string object with a primitive string due to type coercion. However, === (strict equality) returns false because objects and primitives are different types. The localeCompare() method compares strings lexicographically.

*/
let sd21 = "Ajay"
let sd22 = new String("Ajay");
​
console.log(sd21 == sd22);  // true (type coercion)
console.log(sd21 === sd22); // false (strict comparison)
console.log(sd21.localeCompare(sd22)); // 0 (means they are equal lexicographically)



/*
12. Passing JavaScript String as Objects :--
We can create a JavaScript string using the new keyword.


const str = new String("GeeksforGeeks");
​
console.log(str);

Output
[String: 'GeeksforGeeks']

*/

const str = new String("GeeksforGeeks");
​
console.log(str);



/*
Are the strings created by the new keyword is same as normal strings?
No, the string created by the new keyword is an object and is not the same as normal strings.


const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";
​
console.log(str1 == str2);
console.log(str1 === str2);

Output
true
false
*/

const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";
​
console.log(str1 == str2);         //true
console.log(str1 === str2);       //false


console.log("**************************************************");


// Multiline Strings (ES6 and later)
// You can create a multiline string using backticks () with template literals. The backticks allows you to span the string across multiple lines, preserving the line breaks within the string.

let q = `
    This is a
    multiline
    string`;

console.log(q);
console.log(typeof q);




// Empty String
// You can create an empty string by assigning either single or double quotes with no characters in between.

let l1 = '';
let l2 = "";
​
console.log(l1);
console.log(l2);




// Template Literals (String Interpolation)
// You can create strings using Template Literals. Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.

let h1 = 'gfg';
let h2 = `You are learning from \${h1}`;
​
console.log(h2);           // You are learning from gfg




// Create using Constructor
// The new String() constructor creates a string object instead of a primitive string. It is generally not recommended because it can cause unexpected behavior in comparisons

let a = new String('abcd');
console.log(a);

// Output
// [String: 'abcd']
