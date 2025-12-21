const name = "dhirendra"
const repoCount = 50
console.log(typeof name);
console.log(typeof repoCount);

// console.log(name + repoCount + " Value");

// Template String / Template Literal
// Use backtick ` ` (Shift + ` key) to create template string
// Allows embedded expressions, multi-line strings, string interpolation etc.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Example
// Hello my name is dhirendra and my repo count is 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   
// Template string mai hum ${} ka use karke variables ya expressions ko embed kar sakte hain.

// String Object 
// created using String constructor 
const gameName = new String('dhirendra-hc-com')

// console.log(gameName.__proto__);  // Access to String prototype methods and properties and inheritance or prototype chain or linkage.

console.log(gameName);
console.log(typeof gameName);   // object
console.log(gameName[0]);       // d

// String Methods   

console.log(gameName.length());                    // 16
console.log(gameName.toString());                // 'dhirendra-hc-com'
console.log(gameName.toLowerCase());             // 'dhirendra-hc-com'
console.log(gameName.toUpperCase());             // 'DHIRENDRA-HC-COM'
console.log(gameName.includes('hc'));            // true
console.log(gameName.includes('xyz'));           // false
console.log(gameName.split('-'));                // [ 'dhirendra', 'hc', 'com' ]
console.log(gameName.constructor);               // [Function: String]
console.log(gameName.valueOf());                 // 'dhirendra-hc-com'
console.log(gameName.charAt(0));             // 'd'
console.log(gameName.indexOf('h'));          // 10
console.log(gameName.substring(0, 4));       // 'dhir'
console.log(gameName.slice(-3));             // 'com'


// 👉 Agar start > end ho jaye,
// 👉 toh slice() empty string return karta hai
console.log(gameName.slice(-1,-4));        // ''  
// it means it starts from the end of the string and goes backwards to index -4 but does not include the character at index -4. 
// Explanation:
// In the string 'dhirendra-hc-com':
// - The character at index -1 is 'm' (the last character).
// - The character at index -2 is 'o'.
// - The character at index -3 is 'c'.
// - The character at index -4 is '-'.
// When you use slice(-1, -4), it starts at index -1 ('m') and goes backwards to index -4 ('-'), but does not include the character at index -4.
// Since there are no characters between index -1 and -4 when slicing backwards, the result is an empty string ('').
// In summary, slice(-1, -4) means to start from the last character and move backwards to the fourth last character,
// but since the start index is greater than the end index in this case , 
// So, it returns an empty string as there are no characters between index -1 and -4 when slicing backwards.



console.log(gameName.replace('dhirendra', 'dhiru')); // 'dhiru-hc-com'
console.log(gameName.replace('hc', 'HC'));     // 'dhirendra-HC-com'
console.log(gameName.trim());                 // 'dhirendra-hc-com'
console.log(gameName.startsWith('dhi'));      // true
console.log(gameName.endsWith('com'));       // true

console.log(gameName.lastIndexOf('m'));    // 15 

// More String Methods  
console.log(gameName.repeat(2));          // 'dhirendra-hc-comdhirendra-hc-com'
console.log(gameName.repeat(3));          // 'dhirendra-hc-comdhirendra-hc-comdhirendra-hc-com'
console.log(gameName.concat('-official')); // 'dhirendra-hc-com-official'
console.log(gameName.toLocaleLowerCase()); // 'dhirendra-hc-com'
console.log(gameName.toLocaleUpperCase()); // 'DHIRENDRA-HC-COM'
console.log(gameName.trimEnd());        // 'dhirendra-hc-com'
console.log(gameName.trimStart());      // 'dhirendra-hc-com'
console.log(gameName.endsWith('com'));    // true
console.log(gameName.startsWith('dhir'));  // true


console.log(gameName.substr(0, 4));      // 'dhir'
// substr method returns a portion of the string, starting at the specified index and extending for a given number of characters.
// it means it starts from index 0 and takes 4 characters from there.


console.log(gameName.charCodeAt(2));   // 105
// charCodeAt method returns the Unicode of the character at a specified index in a string.
// it means it returns the Unicode value of the character present at index 2.


console.log(gameName.codePointAt(2));   // 105
// codePointAt method returns the Unicode code point of the character at a specified index in a string.
// it means it returns the Unicode code point of the character present at index 2.  


console.log(gameName.isWellFormed());  // true 
// isWellFormed method checks if the string is well-formed according to the Unicode standard.
// it means it returns true if the string is well-formed, otherwise false.  
// A well-formed string is one that adheres to the rules and structure defined by the Unicode standard, ensuring that all characters are valid and properly encoded.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed



console.log(gameName.normalize());    // 'dhirendra-hc-com'
// normalize method returns the Unicode Normalization Form of the string.
// it means it converts the string into a standard form, ensuring that characters with multiple representations are represented consistently.   
// it means it helps in comparing and processing strings that may have different representations but are visually identical.    
// or elaborate way to say it is that it standardizes the way characters are represented in a string according to Unicode normalization forms.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize



console.log(gameName.padStart(20, '*'));  // '****dhirendra-hc-com'  
// padStart method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
// it means if the original string is shorter than the specified length, it adds the specified characters to the beginning of the string until it reaches the desired length.


console.log(gameName.padEnd(25, '#'));    // 'dhirendra-hc-com##########'  
// padEnd method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
// it means if the original string is shorter than the specified length, it adds the specified characters to the end of the string until it reaches the desired length.


console.log(gameName.lastIndexOf('c'));   // 13     
// lastIndexOf method returns the index of the last occurrence of a specified value in a string, searching backwards from the end of the string to the beginning.
// it means it starts searching from the end of the string and returns the index of the last occurrence of the specified value.
// If the value is not found, it returns -1.



console.log(gameName.match(/h/g));       // [ 'h', 'h' ]  
// Syntax kya hai?   -->   string.match(regexp)
// ismai jo (regexp) ya kya hai?    ---> ya regular expression hai.
//  Regular expression ek pattern hota hai jo string mai match karne ke liye use hota hai.
//  yaha /h/g ek regular expression hai jo 'h' character ko match karta hai aur 'g' flag ka matlab hai global search.
// Global Search ka matlab hai ki string mai jitne bhi 'h' characters hai un sabko match karo na ki sirf pehle wale ko.


// match all occurrences of 'h' using global flag 'g' and the global flag 'g' is used to perform a global search (find all matches rather than stopping after the first match).
// match method means to find matches based on regular expression using match() method its returns an array of matches or null if no match is found.
// And more...
// Match method is used to retrieve the matches when matching a string against a regular expression. And Match Attributes are used to get the groups from a matched string based on regular expression patterns. 
// it means it is used to find matches in a string based on a regular expression pattern.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match



console.log(gameName.search('hc'));      // 10 
// // search method is used to search for a specified value or pattern in a string and returns the position of the first match. It can take a string or a regular expression as an argument.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#methods  
 
console.log(gameName.charAt(2));              // 'i'
console.log(gameName.indexOf('t'));         // -1   (not found)


console.log(gameName.indexOf('d', 2));          // 3
// Search from index 2    
// // it means start searching from index 2 and returns the index of the first occurrence of 'd' after index 2. 
// If not found, it returns -1.

const newString = gameName.substring(0, 4)
console.log(newString);                 // 'dhir'

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);     // ''   

const newStringOne = "   dhirendra    "
console.log(newStringOne);              // '   dhirendra    '
console.log(newStringOne.trim());       // 'dhirendra'

const url = "https://dhirendra.com/dhirendra%20jha"

console.log(url.replace('%20', '-'))        // 'https://dhirendra.com/dhirendra-jha'

console.log(url.includes('sundar'))       // false
console.log(url.includes('dhirendra'))    // true
console.log(url.startsWith('https'))    // true
console.log(url.endsWith('.com/dhirendra%20jha'))  // true


console.log(gameName.split('-'));           // [ 'dhirendra', 'hc', 'com' ]
console.log(gameName.split(''));            // [ 'd', 'h', 'i', 'r', 'e', 'n', 'd', 'r', 'a', '-', 'h', 'c', '-', 'c', 'o', 'm' ]

// More String Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#methods
// https://www.w3schools.com/jsref/jsref_obj_string.asp