//In javascript months start with 0.
let myDate = new Date()
console.log(myDate)  //  this format of date is not readable so we need to convert.

console.log(myDate.toString()) //Tue Oct 06 2026 17:13:36 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Tue Oct 06 2026
console.log(myDate.toLocaleString()) //10/6/2026, 5:15:57 PM
console.log(typeof myDate) //object

let mycreatedDate = new Date(2023,0,23) // months start from 0 --> jan ...
console.log(mycreatedDate.toDateString()) //  Mon Jan 23 2023

let mycreatedDate1 = new Date(2023,0,23,5,3)
console.log(mycreatedDate1.toLocaleString()) // 1/23/2023, 5:03:00 AM

let mycreatedDate2 = new Date("01-14-2023")
console.log(mycreatedDate2.toLocaleString()) // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() //polls , quiz return current time in millisec.
console.log(myTimeStamp)// in ms
console.log(mycreatedDate.getTime()) //in ms

console.log(Math.floor(Date.now()/1000)) // convert ms into sec.

//this is how you directly get the date information
let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday : "long"
})
