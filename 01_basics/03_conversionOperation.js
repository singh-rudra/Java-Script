let score = "abc"
console.log(typeof score)
let valueInNumber=Number(score) // If convert string with char and undefined it store NaN and for null --> 0 , boolean --> 1. "but datatype was change to number".
console.log(valueInNumber)  
console.log(typeof valueInNumber)
// "33" => 33 , "33anc" => NaN , true => 1 , false =>0

let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)
//datatype = boolean
// 1 => true ,  0 => false , for any number =>true , "" => false , "abc"(string value) => true , null & undefined => false .

let someN=null
let stringNumber=String(someN)
console.log(stringNumber)
console.log(typeof stringNumber)
//datatype = string
// 33 => 33 , true => true , null => null
