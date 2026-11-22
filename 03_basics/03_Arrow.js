// this : refer to current context. "this" uses in object.

const user = {
    username : "anuj",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to webside`)
       // console.log(this) // print current contest
    }
}

user.welcomeMessage() //anuj , Welcome to webside
user.username="Alok"
user.welcomeMessage() //Alok , Welcome to webside

// console.log(this) , gives {} empty.

// "this" can't useable inside function.
// const chai = function(){
//     let username = "abc"
//     console.log(this.username)
// }
// chai()


//  ARROW Fuction.
// Explict return
const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4)) // 7

// Implicit return
const add = (num1,num2) => num1+num2
console.log(add(2,4)) //6

const obj = ()=>({usenaame : "Rudra"})
console.log(obj()) //{ usenaame: 'Rudra' }