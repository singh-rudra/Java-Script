// Functions : it is a block of code which can be use multiple time.

// defining a function
function greeting(){
    console.log("Hello Rudra Singh")
}

// calling a function
greeting // reference of a function.
greeting() // execution of a function.

// It can't give error if it return something and you can't store or vice versa.
/*
function addTwoNumbers(n1,n2){ // n1,n2 are parameters.
    console.log(n1+n2)
}

addTwoNumbers() // NaN
addTwoNumbers(10 , 20) // 30 // when we pass more than required arug it ignore . here 10,20 are argument.
addTwoNumbers(10,"20") // 1020
addTwoNumbers(10,"a") //10a
addTwoNumbers(10,null) //10
const res = addTwoNumbers(5,3)

console.log(res) // then on printing result why do we get undefined?
//this why it means to use return as our functin isnt returning anything now
*/

function addTwoNumbers(number1 , number2){
    let result = number1+number2
    return result
}
const result = addTwoNumbers(5,3)
console.log(`Result : ${result}`)


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Rudra"))
console.log(loginUserMessage()) //undefined just logged in


function loginUserMessage(username = "abc"){ //(default parameter)
    //username===undefined
    if(!username){ // undefined or "" : are treat as false.
        console.log("Please enter user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rudra"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){ // ... => these are the rest and spread operator they are the rest operator here , acoording to there usecase there names change 
    return num1
}
console.log(calculateCartPrice(200,400,500)) //[ 200, 400, 500 ]


function calculateCartPrice1(val1,val2,...num1){ 
    return num1
}
console.log(calculateCartPrice1(200,400,500,1000)) // [ 500, 1000 ]


const user = {
    username: "sam",
    price: 199
}
function  handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username: "satya",
    price: 150
})

const myNewArray=[200,400,100,600]
function secondValue(getArray){
    return getArray[1]
}
console.log(secondValue(myNewArray))
console.log(secondValue([100,40,59,30]))
