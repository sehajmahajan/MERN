let date = new Date();

let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day_fetched = date.getDay();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let month_fetched = date.getMonth();

console.log("Today's date is: ",date.getDate(),months[month_fetched],date.getFullYear());
console.log("Today is: ",day[day_fetched]);

console.log("Day is: ",date.getDay());
console.log("Date is: ",date.getDate());
console.log("Month is: ",date.getMonth());
console.log("Year is: ",date.getFullYear());
console.log("Hours is: ",date.getHours());
console.log("Minutes is: ",date.getMinutes());
console.log("seconds is: ",date.getSeconds());
console.log("Millisecond is: ",date.getMilliseconds());