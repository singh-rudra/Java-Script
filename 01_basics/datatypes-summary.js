/*
    JS is dynamically typed language.
    you don't need to declare the data type of a variable.the type is determine in runtime.

    Data-Types are divided in two parts :
        primitive (call by value)
        non-primitive (call by reference)

    primitive type:
        7 types :
            1.String
            2.Number
            3.Boolean
            4.null
            5.undefined
            6.Symbol (kisi bhi value ko unique banana ka liya use hota hai)
            7.BigInt
    non-primitive (reference) type :
        1.Arrays  
        2.Objects
        3.Functions      
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false

const bigNumber = 54696298975n //(BigInt)

const heroes=["shaktiman","naagraj","doga"]// arrays
let myObj={ 
    name:"Rudra",
    age: 20
}// inside the {} the variables are object,store in key : values.

//defining function
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)//function or object Function
// all the non-primitive data-type are typeOf "object".

