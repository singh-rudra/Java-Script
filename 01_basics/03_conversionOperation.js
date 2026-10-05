//for numbers.
let score = "abc"
console.log(typeof score)
let valueInNumber=Number(score) // If convert string with char and undefined it store NaN and for null --> 0 , boolean --> 1. "but datatype was change to number".
console.log(valueInNumber)  
console.log(typeof valueInNumber)
// "33" => 33 , "33anc" => NaN , true => 1 , false =>0


//for boolean.
let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)
//datatype = boolean
// 1 => true ,  0 => false , for any number =>true , "" => false , "abc"(string value) => true , null & undefined => false .


//for string
let someN=null
let stringNumber=String(someN)
console.log(stringNumber)
console.log(typeof stringNumber)
//datatype = string
// 33 => 33 , true => true , null => null


// ********************************* OPERATIONS *********************************

let value = 3
let negValue = -value //-3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = "rudra"

let str3 = str1+str2
console.log(str3) // hellorudra

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(2+2+"1") //41

console.log(true) //true
console.log(+true) //1
//console.log(true+)//error
console.log(+"")//0

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++ // ++gameCounter (perfix , postfix)
console.log(gameCounter) //101



