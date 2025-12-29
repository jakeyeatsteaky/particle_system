/**
 * 
 */

let now = new Date();
console.log(now);

let sinceJan1970 = new Date(1*1000*800000000);
console.log(sinceJan1970);

let today = new Date("2025-12-28");
console.log(today)

const dateObj = new Date();
let month = dateObj.getMonth();
let year = dateObj.getFullYear();
let date = dateObj.getDate();

console.log(month, year, date);
console.log(dateObj.getMilliseconds());