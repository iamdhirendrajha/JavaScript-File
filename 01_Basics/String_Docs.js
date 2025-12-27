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



