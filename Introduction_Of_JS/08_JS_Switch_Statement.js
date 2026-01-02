// JavaScript switch Statement

/*

// The switch statement evaluates an expression and executes code based on matching cases. It’s an efficient alternative to multiple if-else statements, improving readability when handling many conditions.

//Syntax
switch (expression) {
    case value1:
        // Code block 1
        break;
    case value2:
        // Code block 2
        break;
    // more cases
    default:
        // Default code block
}


How the Switch Statement Works
Evaluation: The expression is evaluated once.
Comparison: The value of the expression is compared against each case.
Execution: The block under the matching case runs. If no match, the default block executes (if present).
Break: Stops further execution within the switch block.
Default: Runs if no cases match. It’s optional but provides a fallback option.


Now let's understand this with the help of example:
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

Output


Wednesday
In this example

Day is set to 3.
The switch statement evaluates day.
Since day is 3, the case 3 the block is executed, assigning "Wednesday" to dayName.
The break statement ends the switch statement, preventing execution from continuing into other cases.


