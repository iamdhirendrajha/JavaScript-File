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

console.log(myDate.toTimeString()); // Time portion only
console.log(myDate.toLocaleString());  // Localized date and time , it means the date and time format is adjusted according to the user's locale settings.

console.log(myDate.toLocaleDateString());  // Localized date only , it means the date format is adjusted according to the user's locale settings.

console.log(myDate.toLocaleTimeString());  // Localized time only , it means the time format is adjusted according to the user's locale settings.



// // Various ways to create date objects
// let date1 = new Date('2023-06-15');
// console.log(date1); // Specific date from string

// let date2 = new Date(2023, 5, 15); // Month is 0-indexed (0 = January, 5 = June)
// console.log(date2); // Specific date from components
