// JavaScript Variables
/*
Variables in JavaScript can be declared using var, let, or const. JavaScript is dynamically typed, so variable types are determined at runtime without explicit type definitions.

// Old style
var a = 10    

// Prferred for non-const
let b = 20;    

// Preferred for const (cannot be changed)
const c = 30;  

console.log(a);
console.log(b);
console.log(c);


Output: 
10
20
30


Declaring Variables in JavaScript : 
*     Before ES6 (2015): Variables were declared only with var, which is function-scoped and global-scoped, causing issues like hoisting and global pollution.
*     ES6 Introduction: let and const were introduced to provide safer alternatives for declaring variables.
*     Scope: let and const are block-scoped (limited to { } block) or global-scoped, reducing errors compared to var.



1. var keyword
var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

const a = 5
let b = "gfg";
console.log(a);
console.log(b);

Rules for Naming Variables : --

When naming variables in JavaScript, follow these rules

*   Variable names must begin with a letter, underscore (_), or dollar sign ($).
*   Subsequent characters can be letters, numbers, underscores, or dollar signs.
*   Variable names are case-sensitive (e.g., age and Age are different variables).
*   Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

let userName = "Suman";    // Valid
let \$price = 100;         // Valid
let _temp = 0;            // Valid
let 123name = "Ajay";    // Invalid
let function = "gfg";   // Invalid



Interesting Facts about Variables in JavaScript: -- 

1. let or const are preferred over var: Initially, all the variables in JavaScript were written using the var keyword but in ES6 the keywords let and const were introduced. The main issue with var is, scoping.

2. var is function scoped: Can be accessed outside block if within the function.
if (true) {
  var x = 10; 
}

// Accessible outside the block
// because we are in same function
console.log(x);


Output:
10

3. let and const are block scoped : Cannot be accessed outside block even if inside the same function

if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ReferenceError


Output:

Hangup (SIGHUP)
/home/guest/sandbox/Solution.js:5
console.log(y, z); // ReferenceError
            ^



4. var can be redeclared in the same scope, but let and const cannot be
var x = 10;
var x = 20; // Allowed

let y = 30;
let y = 40; // SyntaxError

const z = 50;
const z = 60; // SyntaxError


Output:

SyntaxError: Identifier 'y' has already been declared