// Dates

// Creating a date
let now = new Date();
console.log(now); // Current date and time  

// or 

let myDate = new Date();
console.log(myDate); // Current date and time
console.log(typeof myDate); // object

console.log(myDate.toString());     // Full date string
console.log(myDate.toDateString()); // Date portion only
console.log(myDate.toISOString());  // ISO format , ISO stand for International Standard Organization, its mean standard format for date. 
// ISO 8601 is the international standard for representing dates and times.

console.log(myDate.toUTCString());  // UTC format , UTC stand for Universal Time Coordinated, its mean time standard that is the basis for civil time and time zones worldwide.

   
console.log(myDate.toLocaleString());  // Localized date and time , it means the date and time format is adjusted according to the user's locale settings.

console.log(myDate.toLocaleDateString());  // Localized date only , it means the date format is adjusted according to the user's locale settings.


console.log(myDate.toTimeString()); // Time portion only
console.log(myDate.toLocaleTimeString());  // Localized time only , it means the time format is adjusted according to the user's locale settings.\

console.log(myDate.toJSON());      


// Note: Months are zero-indexed (0 = January, 11 = December)
// Days of the week are also zero-indexed (0 = Sunday, 6 = Saturday)
// So, be careful while using these methods.
// Always remember to add 1 to month and day values if you want them in human-readable format. e.g., January is 0, so add 1 to get 1 for January.
// Similarly, Sunday is 0, so add 1 to get 1 for Sunday.e.g., Sunday is 0, so add 1 to get 1 for Sunday. 
// code example:
// let month = myDate.getMonth() + 1; // Adding 1 to month
// let day = myDate.getDate(); 
// console.log(month);
// console.log(day);



// Getting date components
console.log(myDate.getFullYear()); // Get year
console.log(myDate.getMonth());    // Get month (0-11)
console.log(myDate.getDate());     // Get day of month (1-31)
console.log(myDate.getDay());       // Get day of week (0-6) Sunday - Saturday
console.log(myDate.getHours());    // Get hours (0-23)
console.log(myDate.getMinutes());   // Get minutes (0-59)   
console.log(myDate.getSeconds());   // Get seconds (0-59)
console.log(myDate.getMilliseconds()); // Get milliseconds (0-999)  
console.log(myDate.getTime());     // Get time in milliseconds since Jan 1, 1970
console.log(myDate.getUTCDate());  // 


// Setting date components


// // Various ways to create date objects
// let date1 = new Date('2023-06-15');
// console.log(date1); // Specific date from string

// let date2 = new Date(2023, 5, 15); // Month is 0-indexed (0 = January, 5 = June)
// console.log(date2); // Specific date from components
