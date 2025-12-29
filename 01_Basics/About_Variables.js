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

