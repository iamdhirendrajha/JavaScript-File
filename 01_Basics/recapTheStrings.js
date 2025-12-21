const name = "dhiru"
const days = 8 

console.log(typeof name);  // string
console.log(typeof days);  // number
console.log("Hello My name is ${name}, I am learning JavaScript for last ${days} days");

// String Concatenation
console.log("Hello My name is " + name + ", I am learning JavaScript for last " + days + " days");

// Template Literals (Template Strings)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const mygithub = new String("       iamdhirendrajha        ")
const github = new String("i-am-dhirendra-jha")
console.log(github);
console.log(typeof github);  // object
console.log(github[0]);      // i

// String Methods 
console.log(github.length());                  // 19
console.log(github.toString());              // 'i-am-dhirendra-jha'
// toString() method returns a string representing the specified object.    
// It is used to convert an object to a string.    
// It means that when you call toString() on an object, it returns a string that represents the object in a human-readable format. 
// This method is often used for debugging or displaying object information in a more understandable way.
// For example, when you call toString() on a String object, it returns the string value of that object.
// In this case, calling toString() on the String object github returns the string 'i-am-dhirendra-jha'.
// So, the output of console.log(github.toString()) will be 'i-am-dhirendra-jha'.

// In summary, toString() is a method that converts an object to its string representation, making it easier to read and understand.

console.log(github.toLowerCase());           // 'i-am-dhirendra-jha'

console.log(github.toUpperCase());          // 'I-AM-DHIRENDRA-JHA'

console.log(github.includes("jha"));       // true

console.log(github.split("-"));         // [ 'i', 'am', 'dhirendra', 'jha' ]

console.log(mygithub.trim());          // 'iamdhirendrajha'

console.log(github.constructor());         // [Function: String] 
// it indicates that the constructor function used to create the object is the built-in String constructor function in JavaScript. it means that the object github is an instance of the String type, and it was created using the String constructor function.

// constructor batata hai object kis se bana hai


/*
1️⃣ constructor hota kya hai?

Constructor ek special property hoti hai jo batati hai:
“Ye object kis function / class se bana hai?”

Simple words me:
Har JavaScript object ke paas ek constructor hota hai jo uske creation function / class ko point karta hai.
Ye batata hai object ka parent / origin

***********************
2️⃣ constructor ka use kya hai?

Constructor ka use hota hai ye jaanne ke liye ki:
“Ye object kis type ka hai?”

For example:
const str = new String("Hello World");

console.log(str.constructor); // [Function: String]

Ye batata hai ki str object String constructor se bana hai, iska matlab str ek String type ka object hai.

*/

console.log(github.valueOf());          // 'i-am-dhirendra-jha'
// The valueOf() method in JavaScript is used to return the primitive value of a String object. 
// When called on a String object, it returns the underlying string value that the object represents.
// In this case, calling github.valueOf() returns the string 'i-am-dhirendra-jha', which is the primitive value of the String object github.

// iska matlab hai ki valueOf() method String object ke andar jo asli string value hai, usse return karta hai.

// Explanation:
// In JavaScript, there are two types of strings: primitive strings and String objects.
// Primitive strings are simple string values, while String objects are created using the String constructor.
// When you create a String object using the String constructor (like in this case with github), it wraps the primitive string value inside an object.
// The valueOf() method is used to extract that primitive string value from the String object.
// So, when you call github.valueOf(), it returns the actual string 'i-am-dhirendra-jha' that is stored inside the String object github.

// In summary, valueOf() is a method that retrieves the primitive string value from a String object.


/* 1️⃣ valueOf() hota kya hai?

valueOf() ek built-in JavaScript method hai jo:
object ke andar ki asli (primitive) value return karta hai

Simple shabdon me:
Agar variable object hai → uski actual value deta hai
Agar already primitive hai → wahi value return kar deta hai


2️⃣ valueOf() ka use kya hai?

valueOf() ka use hota hai ye jaanne ke liye ki:
“Object ke andar ki asli value kya hai?”

For example:
const strObj = new String("Hello World");   
console.log(strObj.valueOf()); // "Hello World"

Yahaan strObj ek String object hai jo "Hello World" string ko wrap karta hai.
Jab hum strObj.valueOf() call karte hain, toh ye uske andar ki asli string value "Hello World" return karta hai.        

*/

console.log(github.charAt(5));        // 'm'
// charAt() method returns the character at the specified index in a string.
// In this case, calling github.charAt(5) returns the character at index 5 of the string 'i-am-dhirendra-jha', which is 'm'.        
// Indexing starts from 0, so the characters are indexed as follows:
// 'i' (0), '-' (1), 'a' (2), 'm' (3), '-' (4), 'd' (5), 'h' (6), 'i' (7), 'r' (8), 'e' (9), 'n' (10), 'd' (11), 'r' (12), 'a' (13), '-' (14), 'j' (15), 'h' (16), 'a' (17)
// Therefore, the character at index 5 is 'm'.

// In summary, charAt() is a method that retrieves the character at a specific index in a string.

console.log(github.indexOf('d'));     // 5
// indexOf() method returns the index of the first occurrence of a specified value in a string.
// In this case, calling github.indexOf('d') returns the index of the first occurrence of the character 'd' in the string 'i-am-dhirendra-jha', which is 5.
// The characters in the string are indexed as follows:
// 'i' (0), '-' (1), 'a' (2), 'm' (3), '-' (4), 'd' (5), 'h' (6), 'i' (7), 'r' (8), 'e' (9), 'n' (10), 'd' (11), 'r' (12), 'a' (13), '-' (14), 'j' (15), 'h' (16), 'a' (17)
// Therefore, the first occurrence of 'd' is at index 5.

// In summary, indexOf() is a method that finds the index of the first occurrence of a specified value in a string.

console.log(github.substring(4, 9));   // '-dhir'
// substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// In this case, calling github.substring(4, 9) returns the substring from index 4 to index 9 of the string 'i-am-dhirendra-jha', which is '-dhir'.
// The characters in the string are indexed as follows:
// 'i' (0), '-' (1), 'a' (2), 'm' (3), '-' (4), 'd' (5), 'h' (6), 'i' (7), 'r' (8), 'e' (9), 'n' (10), 'd' (11), 'r' (12), 'a' (13), '-' (14), 'j' (15), 'h' (16), 'a' (17)
// Therefore, the substring from index 4 to index 9 is '-dhir'.

//  In summary, substring() is a method that extracts a portion of a string based on specified start and end indexes.

console.log(github.slice(-9));      // 'dhirendra-jha'
console.log(github.slice(-1));      // 'a'
console.log(github.slice(-5));     // 'r-jha'
console.log(github.slice(-13));    // 'endra-jha'

console.log(github.lastIndexOf('a'));  // 17
// lastIndexOf() method returns the index of the last occurrence of a specified value in a string.
// In this case, calling github.lastIndexOf('a') returns the index of the last occurrence of the character 'a' in the string 'i-am-dhirendra-jha', which is 17.
// The characters in the string are indexed as follows:
// 'i' (0), '-' (1), 'a' (2), 'm' (3), '-' (4), 'd' (5), 'h' (6), 'i' (7), 'r' (8), 'e' (9), 'n' (10), 'd' (11), 'r' (12), 'a' (13), '-' (14), 'j' (15), 'h' (16), 'a' (17)
// Therefore, the last occurrence of 'a' is at index 17.

// In summary, lastIndexOf() is a method that finds the index of the last occurrence of a specified value in a string.

console.log(github.repeat(3));      // 'i-am-dhirendra-jhai-am-dhirendra-jhai-am-dhirendra-jha'
// repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// In this case, calling github.repeat(3) returns a new string that consists of the original string 'i-am-dhirendra-jha' repeated 3 times.
// So, the result is 'i-am-dhirendra-jhai-am-dhirendra-jhai-am-dhirendra-jha'.
// In summary, repeat() is a method that creates a new string by repeating the original string a specified number of times.

console.log(github.concat('-official'));  // 'i-am-dhirendra-jha-official'
// concat() method is used to merge two or more strings. It does not change the existing strings, but returns a new string that contains the combined text of the original strings.
// In this case, calling github.concat('-official') merges the original string 'i-am-dhirendra-jha' with the string '-official', resulting in the new string 'i-am-dhirendra-jha-official'.
// In summary, concat() is a method that combines multiple strings into one new string.

console.log(github.substr(5, 5));     // 'dhire'
// or    console.log(gameName.substring(0, 4));      // 'dhir'

// substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters.
// In this case, calling github.substr(5, 5) starts from index 5 of the string 'i-am-dhirendra-jha' and takes 5 characters from there.
// The characters in the string are indexed as follows:
// 'i' (0), '-' (1), 'a' (2), 'm' (3), '-' (4), 'd' (5), 'h' (6), 'i' (7), 'r' (8), 'e' (9), 'n' (10), 'd' (11), 'r' (12), 'a' (13), '-' (14), 'j' (15), 'h' (16), 'a' (17)
// Therefore, starting from index 5 ('d') and taking 5 characters gives us 'dhire'.

/*
substr(start, length) kya karta hai?

start → kis index se start kare

length → kitne characters lene hain
*/

console.log(github.charCodeAt(3));   // 109

console.log(github.codePointAt(3));   // 109

/* What is the difference between charCodeAt() and codePointAt()?
The main difference between charCodeAt() and codePointAt() lies in the way they handle Unicode characters, especially those outside the Basic Multilingual Plane (BMP).

1. charCodeAt():
- The charCodeAt() method returns a 16-bit integer (a number between 0 and 65535) representing the UTF-16 code unit at the specified index in a string.
- It is limited to the Basic Multilingual Plane (BMP), which includes characters with code points from U+0000 to U+FFFF.
- For characters outside the BMP (code points above U+FFFF), charCodeAt() may return a surrogate pair, which consists of two code units.    

2. codePointAt():
- The codePointAt() method returns a non-negative integer that represents the Unicode code point value of the character at the specified index in a string.
- It can handle characters outside the BMP, returning the full code point value for characters with code points above U+FFFF.
- This method is more suitable for working with the full range of Unicode characters, including those represented by surrogate pairs in UTF-16.

// In summary, charCodeAt() is limited to the BMP and returns UTF-16 code units, while codePointAt() can handle the full range of Unicode characters and returns their actual code point values.

*********************************************
1️⃣ charCodeAt() – What it does

charCodeAt() returns the UTF-16 code unit of the character at a given index.

Key points

Works on 16-bit UTF-16 units

Cannot correctly handle characters outside the Basic Multilingual Plane (BMP)
(like many emojis)

Returns a number between 0 and 65535

-----------------------------------------------

2️⃣ codePointAt() – What it does

codePointAt() returns the full Unicode code point of the character at a given position.

Key points

Works with full Unicode characters

Correctly handles emoji & special symbols

Returns values greater than 65535 when needed

Introduced in ES6 (2015)

-----------------------------------------------
5️⃣ When to use what?
✅ Use charCodeAt() when:

Working with basic ASCII characters

Legacy code

Performance-critical simple cases

✅ Use codePointAt() when:

Working with emoji

Unicode-heavy text

Modern JavaScript applications

+++++++++++++++++++++++++++++++++++++

charCodeAt() returns the UTF-16 code unit of a character, while codePointAt() returns the full Unicode code point and correctly handles characters like emojis.

*/

console.log(github.isWellFormed()); // true
// isWellFormed() method checks if a string is well-formed according to the Unicode standard.

console.log(mygithub.isWellFormed()); // true

/* isWellFormed() kya karta hai?

isWellFormed() method check karta hai ki:
“String Unicode standard ke hisaab se well-formed hai ya nahi?”     
Agar string well-formed hai → true return karta hai
Agar string well-formed nahi hai → false return karta hai

Well-formed Unicode string ka matlab hai ki:
String ke sare characters valid Unicode code points hain
Koi invalid ya malformed sequences nahi hain        

*/

console.log(github.normalize);   // [Function: normalize]
/* Normalize ka matlab kya hai?
normalize ka matlab hai ki:
String ko ek standard format me convert karna or Unicode representation ko standardize karna

normalize() method string ko ek standard Unicode format me convert karta hai.
Ye method string ke characters ko normalize karta hai, taki unka representation consistent ho sake.
Ye method Unicode standard ke hisaab se string ke characters ko ek specific form me convert karta hai.
Iska use tab hota hai jab aapko string ke characters ko compare karna ho ya unhe kisi specific format me store karna ho.
*/

console.log(github.padEnd(25 , "-"));   // 'i-am-dhirendra-jha-------'  
// the syntax of padEnd() method is:
// str.padEnd(targetLength [, padString])

console.log(github.padStart(25 , "-")); // '-------i-am-dhirendra-jha'

console.log(github.lastIndexOf("c"));  // -1
// lastIndexOf() method returns -1 when the specified value is not found in the string.



  console.log(github.match("d"));        // [ 'd', index: 5, input: 'i-am-dhirendra-jha', groups: undefined ]
  // matlab hai ki d character string me 5th index par milta hai.
//  match() kya karta hai?
// match() method ek string me specified pattern ko search karta hai aur uske matches ko return karta hai.
// Agar pattern milta hai → matches ka array return karta hai
// Agar pattern nahi milta → null return karta hai
// Iska use tab hota hai jab aapko string me kisi specific pattern ko dhundhna ho ya uske matches ko extract karna ho.




console.log(github.search("d"));       // 5
// search() method ek string me specified value ko search karta hai aur uske index ko return karta hai.
// Agar value milti hai → uska index return karta hai
// Agar value nahi milti → -1 return karta hai
// Iska use tab hota hai jab aapko string me kisi specific value ko dhundhna ho aur uske index ko pata karna ho.




console.log(github.endsWith("jha"));   // true
// endsWith() method check karta hai ki kya string kisi specified substring par end hoti hai ya nahi.
// Agar string specified substring par end hoti hai → true return karta hai
// Agar string specified substring par end nahi hoti → false return karta hai
// Iska use tab hota hai jab aapko check karna ho ki string kisi specific substring par end hoti hai ya nahi.   



console.log(github.startsWith("i-am")); // true
// startsWith() method check karta hai ki kya string kisi specified substring se start hoti hai ya nahi.
// Agar string specified substring se start hoti hai → true return karta hai
// Agar string specified substring se start nahi hoti → false return karta hai
// Iska use tab hota hai jab aapko check karna ho ki string kisi specific substring se start hoti hai ya nahi.
  


console.log(github.replace("dhirendra", "dhiru"));  // 'i-am-dhiru-jha'
// replace() method string me specified value ko dusri value se replace karta hai.
// Pehli occurrence ko replace karta hai
// Iska use tab hota hai jab aapko string me kisi specific value ko dusri value se replace karna ho.


console.log(mygithub.trim());       // 'iamdhirendrajha'
// trim() method string ke starting aur ending se whitespace characters ko remove karta hai.
// Iska use tab hota hai jab aapko string ke starting aur ending se extra spaces ko remove karna ho.


console.log(mygithub.trimStart());  // 'iamdhirendrajha        '
// trimStart() method string ke starting se whitespace characters ko remove karta hai.
// Iska use tab hota hai jab aapko string ke starting se extra spaces ko remove karna ho.   

console.log(mygithub.trimEnd());    // '       iamdhirendrajha'
// trimEnd() method string ke ending se whitespace characters ko remove karta hai.
// Iska use tab hota hai jab aapko string ke ending se extra spaces ko remove karna ho.

console.log(mygithub.toLocaleUpperCase()); // '       IAMDHIRENDRAJHA        '
// toLocaleUpperCase() method string ko locale-specific uppercase me convert karta hai.
// Iska use tab hota hai jab aapko string ko locale-specific uppercase me convert karna ho.


console.log(mygithub.toLocaleLowerCase()); // '       iamdhirendrajha        '
// toLocaleLowerCase() method string ko locale-specific lowercase me convert karta hai.
// Iska use tab hota hai jab aapko string ko locale-specific lowercase me convert karna ho. 


console.log(mygithub.localeCompare("   iamdhirendrajha   ")); // 0
// localeCompare() method do strings ko compare karta hai aur unke beech ka difference return karta hai.
// Agar strings same hain → 0 return karta hai
// Agar pehli string dusri se chhoti hai → negative number return karta hai
// Agar pehli string dusri se badi hai → positive number return karta hai
// Iska use tab hota hai jab aapko do strings ko locale-specific tarike se compare karna ho.    

console.log(github.raw`i-am-dhirendra-jha`); // 'i-am-dhirendra-jha'
// raw() method template literals me use hota hai aur raw string ko return karta hai.
// Iska use tab hota hai jab aapko template literals me raw string ko access karna ho.


console.log(github.toString()); // 'i-am-dhirendra-jha'
// toString() method ek string representing the specified object return karta hai.
// Iska use tab hota hai jab aapko object ko string me convert karna ho.

console.log(github.length); // 19
// length property string ke characters ki total count return karti hai.
// Iska use tab hota hai jab aapko string ke length ko pata karna ho.


console.log(github.includes("xyz")); // false
// includes() method check karta hai ki kya string me specified substring present hai ya nahi.
// Agar substring present hai → true return karta hai
// Agar substring present nahi hai → false return karta hai
// Iska use tab hota hai jab aapko check karna ho ki string me kisi specific substring ka hona ya na hona.


console.log(github.split("-")); // [ 'i', 'am', 'dhirendra', 'jha' ]
// split() method string ko specified separator ke basis par split karta hai aur ek array return karta hai.
// Iska use tab hota hai jab aapko string ko multiple parts me divide karna ho based on a specific separator.


console.log(github.replace("jha", "JHA")); // 'i-am-dhirendra-JHA'
// replace() method string me specified value ko dusri value se replace karta hai.
// Pehli occurrence ko replace karta hai
// Iska use tab hota hai jab aapko string me kisi specific value ko dusri value se replace karna ho.


console.log(github.repeat(2)); // 'i-am-dhirendra-jhai-am-dhirendra-jha'
// repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// In this case, calling github.repeat(2) returns a new string that consists of the original string 'i-am-dhirendra-jha' repeated 2 times.
// So, the result is 'i-am-dhirendra-jhai-am-dhirendra-jha'.
// In summary, repeat() is a method that creates a new string by repeating the original string a specified number of times.

console.log(github.slice(-1,-4));        // ''

console.log(github.slice(-1));           // 'a'
console.log(github.slice(-5));          // 'r-jha'

console.log(github.slice(-13));         // 'endra-jha'
// slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// It can take negative indices, which count from the end of the string.
// In this case, calling github.slice(-13) returns the substring starting from the 13th character from the end of the string 'i-am-dhirendra-jha', which is 'endra-jha'.
// The characters in the string are indexed as follows:
// 'i' (0), '-' (1), 'a' (2), 'm' (3), '-' (4), 'd' (5), 'h' (6), 'i' (7), 'r' (8), 'e' (9), 'n' (10), 'd' (11), 'r' (12), 'a' (13), '-' (14), 'j' (15), 'h' (16), 'a' (17)
// Therefore, starting from the 13th character from the end gives us 'endra-jha'.   

// In summary, slice() is a method that extracts a portion of a string based on specified start and end indices, and it can handle negative indices to count from the end of the string.


console.log(github.substr(5, 4));      // 'dhir'

console.log(github.charCodeAt(2));    // 109
console.log(github.codePointAt(2));   // 109
