//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}


// typeof is an operator that returns a string indicating the type of the unevaluated operand.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// Log the types
console.log(typeof score);              // "number"
console.log(typeof scoreValue);        // "number"

console.log(typeof isLoggedIn);       // "boolean"
console.log(typeof outsideTemp);     // "object"
console.log(typeof userEmail);      // "undefined"

console.log(typeof id);             //  "symbol"
console.log(typeof anotherId);     //  "symbol"
console.log(typeof bigNumber);    // "bigint"
console.log(typeof heros);      // "object"
console.log(typeof myObj);     // "object"
console.log(typeof myFunction);   // "function"


// https://262.ecma-international.org/5.1/#sec-11.4.3

*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Premitive (Stack)  ||  Reference (Heap)

// Premitive data types are stored in stack memory. Stack memory is used for static memory allocation, which means that the size of the data must be known at compile time. This makes accessing and manipulating primitive data types very fast and efficient.

// Reference data types are stored in heap memory. Heap memory is used for dynamic memory allocation, which means that the size of the data can change at runtime. This makes reference data types more flexible, but also slower to access and manipulate compared to primitive data types.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Example to show stack and heap memory allocation

let num1 = 6;   
let num2 = num1;

console.log("num1", num1);   // 6
console.log("num2", num2);   // 6

// Increment num1 by 1
// num1 = num1 + 1
// or
num1++;
console.log("After incrementing num1");
console.log("num1", num1);
console.log("num2", num2);  // num2 will not be changed because num2 is stored in stack memory  
// num2 still holds the value copied from num1 at the time of assignment
// num1 is now 7, but num2 remains 6
// This shows that primitive data types are stored in stack memory and each variable holds its own copy of the value.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Reference Type Example

let array1 = ["item1", "item2"];
let array2 = array1;    
console.log("array1", array1);   // ["item1", "item2"]
console.log("array2", array2);   // ["item1", "item2"]
// Here, array2 is assigned the reference of array1, not a copy of its value.

// Let's add a new item to array1
array1.push("item3");
console.log("After pushing item3 to array1");
console.log("array1", array1);   // ["item1", "item2", "item3"]
console.log("array2", array2);   // ["item1", "item2", "item3"]
// Here, both array1 and array2 reflect the change because they both reference the same array in heap memory.
// This shows that reference data types are stored in heap memory and multiple variables can reference the same object.
// Changes made through one reference are visible through all references to the same object.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Summary:
// Primitive data types are stored in stack memory, which allows for fast access and manipulation since each variable holds its own copy of the value.

// Reference data types are stored in heap memory, which allows for dynamic memory allocation and flexibility, but can lead to slower access since multiple variables can reference the same object.

// Example to show stack and heap memory allocation

let a = 10;
let b = a;
console.log("a", a);
console.log("b", b);

a = 20;
console.log("After changing a");
console.log("a", a);
console.log("b", b);  // b will not be changed because b is stored in stack memory
// b still holds the value copied from a at the time of assignment
// a is now 20, but b remains 10
// This shows that primitive data types are stored in stack memory and each variable holds its own copy of the value.
// https://262.ecma-international.org/5.1/#sec-11.4.3



// Symbol Example
let id = Symbol('123');
let anotherId = Symbol('123');
console.log("id", id);
console.log("anotherId", anotherId);
console.log(id === anotherId);
console.log(typeof id);

// Both id and anotherId are unique symbols, even though they have the same description.    
// This shows that each Symbol is stored in stack memory as a unique primitive value.
// Hence, id and anotherId are not equal.
// They are different references in stack memory.
// Therefore, the comparison id === anotherId will return false.
// This further illustrates that primitive data types are stored in stack memory and each variable holds its own unique value.
// https://262.ecma-international.org/5.1/#sec-11.4.3
