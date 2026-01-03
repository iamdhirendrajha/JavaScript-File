// JavaScript Loops
/*

Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true. This makes code more concise and efficient.

In JavaScript, there are three types of Loops :


1. for Loop:-->
The for loop repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.

Example: The below JavaScript program for loop runs from i = 1 to i = 3, incrementing i by 1 each time, and prints "Count:" followed by the current value of i.

for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

Output
Count: 1
Count: 2
Count: 3



Syntax:-->

for (initialization; condition; increment/decrement)  {    
     // Code to execute
}


*   Initialization condition: Here, we initialize the variable in use. It marks the start of a for loop. An already declared variable can be used or a variable can be declared, local to loop only.
*   Testing Condition: It is used for testing the exit condition for a loop. It must return a boolean value. It is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.
*   Statement execution: Once the condition is evaluated to true, the statements in the loop body are executed.
*   Increment/ Decrement: It is used for updating the variable for next iteration.
Loop termination:When the condition becomes false, the loop terminates marking the end of its life cycle.




1.1 for in loop:-->

The for-in loop iterates over the enumerable keys of an object.

Example: The below JavaScript program for-in loop iterates over the keys of the person object and prints each key with its corresponding value.


const person = { name: "Alice", age: 22, city: "Delhi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}


Output:
name : Alice
age : 22
city : Delhi


