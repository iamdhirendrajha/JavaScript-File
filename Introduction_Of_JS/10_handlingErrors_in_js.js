/*

Handling Errors in JavaScript ==>


In JavaScript Error Handling is used to find the errors in the code so, that the coder can find the particular issue to resolve it. Here are the different approaches to handle errors in JavaScript.


1. Using try catch and finally statement==>
The try, catch, and finally blocks are used for error handling. The try block tests code, catch handles errors, and finally runs at the end no matter what the error was.



try {
    const a = b
    console.log(a)
}
catch (error) {
    console.log('The error found here is', error)
​
}
finally {
    console.log('runs each and every time')
}

In the above code the constant variable a is assigned a variable b which is not defined anywhere.

In this case Reference error will be thrown as there is no memory allocated for the variable b which makes it difficult for JavaScript to refer the memory location of b





2. Explicitly causing errors using throw statement==>

The throw statement in JavaScript is used to explicitly throw error's in JavaScript and then these explicitly caused errors are caught by the catch block.



try {
    const a = 10;
    {
        if (a === 10) {
            throw Error("Error is caused due to throw statement");
        }
    }
    console.log(a);
} catch (error) {
    console.log("The error found here is", error);
} finally {
    console.log("runs each and every time");
}

In this code in the try block a error message 'Error is caused due to throw statement' is caused explicitly with the use of throw keyword
In the catch part of this code the error is caught and is then printed on to the console




3. Errors using Error Object==>

The Error Object in JavaScript provides a complete object which contain's the message thrown by the code and the user can find out various aspect's from it like the error message, error name and error stack means at which part in the call stack the error is detected.



function A() {
    B()
}
function B() {
    C()
}
function C() {
    throw new Error('Hello Error hai yahan pai')
}
try {
    A()
}
catch (error) {
    console.log(error.stack)
    console.log(error.message)
    console.log(error.name)
}


In the try block the function A is called which in turn calls function B which in turn calls the function C.

The error is then caught by the catch block and then the error.message prints the error message from the error object.

The error.stack prints the stack trace which means it will print the function in which the error is caused and will also print all the function's that had led to the call of that function.





4. Handling Asynchronous Errors with Promises==>

Handling asynchronous errors with Promises involves using .catch() to catch errors that occur during asynchronous operations, ensuring proper error handling in non-blocking code.



fetch('https://invalid.url')
    .then(response => response.json())
    .catch(error => {
        console.error('Fetch failed:', error.message);
    });

The fetch method initiates an HTTP request.
If the request fails (e.g., due to an invalid URL), the error is passed to the catch block.
The catch block logs the error, ensuring graceful failure handling.





5. Handling Asynchronous Errors with async/await ==>

The try...catch block is commonly used with async/await in asynchronous code to handle errors that may occur during the execution of asynchronous functions, allowing you to catch and manage exceptions in a clean and readable way.



async function f() {
    try {
        let response = await fetch('https://invalid.url');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
​
f();


The await keyword pauses the function until the fetch promise resolves.
If an error occurs (e.g., invalid URL), the catch block captures and logs it.
This approach makes asynchronous code easier to read and manage.




Use cases of Error Management in JavaScript

Network Requests: Handling errors in network operations (e.g., fetching data from an API) to manage issues like timeouts, unreachable servers, or invalid responses.

User Input Validation: Catching errors when users enter invalid or unexpected data (e.g., text instead of numbers) to ensure smooth form submissions and data processing.

File System Operations: Managing errors during file reading or writing (e.g., file not found, permission denied) to avoid crashes and ensure proper handling of file operations.

Database Queries: Handling errors during database interactions (e.g., connection failures, query errors) to prevent system crashes and ensure proper logging and recovery.

Asynchronous Operations: Using error handling in async/await or promises to catch errors in asynchronous tasks, ensuring that failures are handled properly without disrupting the main flow of the application.

*/