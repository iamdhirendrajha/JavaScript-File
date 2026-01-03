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




2. while Loop:-->
The while loop executes as long as the condition is true. It can be thought of as a repeating if statement. 

Example: The below JavaScript program while loop prints "Number:" followed by i repeatedly while i is less than 3, incrementing i by 1 each time.


let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}
    

Output:
Number: 0
Number: 1
Number: 2



Syntax:-->

while (condition) {
    // Code to execute
}

*   While loop starts with the checking of Boolean condition. If it evaluated to true, then the loop body statements are executed otherwise first statement following the loop is executed. For this reason it is also called Entry control loop

*   Once the condition is evaluated to true, the statements in the loop body are executed. Normally the statements contain an update value for the variable being processed for the next iteration.

*   When the condition becomes false, the loop terminates which marks the end of its life cycle.
3. do-while Loop




3. do-while Loop:-->
The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.

Example: The below JavaScript program do-while loop prints "Iteration:" followed by i, increments i by 1, and repeats the process while i is less than 3, ensuring the block runs at least once.

let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 3);



Output:
Iteration: 0
Iteration: 1
Iteration: 2


Syntax:--

do {
    // Code to execute
} while (condition);


*   do while loop starts with the execution of the statement. There is no checking of any condition for the first time.

*   After the execution of the statements, and update of the variable value, the condition is checked for true or false value. If it is evaluated to true, next iteration of loop starts.

*   When the condition becomes false, the loop terminates which marks the end of its life cycle.

*   It is important to note that the do-while loop will execute its statements a tleast once before any condition is checked, and therefore is an example of exit control loop.


