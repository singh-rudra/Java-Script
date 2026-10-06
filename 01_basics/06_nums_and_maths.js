const score = 400
const balance = new Number(100)
console.log(balance) // [Number: 100]

console.log(balance.toString()) // 100 ,it is string you can use all the methods of string.
console.log(balance.toString().length) //3.

console.log(balance.toFixed(2)) // 100.00 , .tofixed(1) //100.0

const otherNum = 23.8966
console.log(otherNum.toPrecision(3)) //23.9
//the toPrecision() method formats a number to a specified total number of significant digits (precision) and returns it as a string.

const num1 = 1000000
console.log(num1.toLocaleString()) // 1,000,000 for us.
console.log(num1.toLocaleString('en-IN')) //10,00,000

// it has more functions.


/* ----------------------------------------- MATHS ---------------------------------------------*/

console.log(Math.abs(-4)) //4

console.log(Math.round(4.6)) //5

console.log(Math.ceil(4.002)) //5

console.log(Math.floor(4.99)) //4

console.log(Math.pow(2,3)) //8

console.log(Math.sqrt(25)) //5

console.log(Math.max(4,3,7,5,2)) //7

console.log(Math.min(4,3,7,5,2)) //2

console.log(Math.random()) // it's value lies between 0 and 1.

console.log(Math.floor(Math.random()*10)+1) // give integer between 0 to 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max - min +1) + min)) // give random integer between max and min



