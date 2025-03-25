let myDate = new Date;
console.log(myDate);  // not readable
console.log(typeof(myDate));

console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())

//to declare a date and time
let myDate2 = new Date(2004, 6, 23, 20, 35, 35, 5); // month in index
//Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date

console.log(myDate2.toLocaleString());

//adding timestamp to the web
let timestamp = Date.now();
console.log(timestamp) //A number representing the timestamp, in milliseconds, of the current time.

//to seconds
console.log(Math.floor(Date.now()/1000));
// from 1970

console.log(myDate.getMonth());

