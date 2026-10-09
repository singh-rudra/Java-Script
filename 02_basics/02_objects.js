/* OBJECTS */
// They can be declared by two ways : 1.literal & 2. constructor.
//singleton : when made with constructor & Only one object/instance of a particular type should exist.
//An object in JavaScript is used to store data in key-value pairs.
//object literals

Object.create //constructor method to create an object => makes singleton.

//object literals - {}

const mysym = Symbol("key1")

const JsUser = {
    name: "Rudra", //tracked as "name" : "Rudra" as string.
    "Full name": "Rudra Pratap Singh", //this value can never be access by using the dot operator.
    mysym : "my key1", //not the right way to use
    [mysym] : "key1",//it is now symbol key ,this value can never be access by using the dot operator.
    age: 20,
    location: "Ranchi",
    email: "rudra@google.com",
    isLoggedIn: false,
    lastloginDays:["monday","saturday"]
}
// accessing the elements of object.
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])
console.log(JsUser["age"])
console.log(JsUser.mysym)//as we it shows they is of string type instead of object
console.log(JsUser[mysym])

JsUser.email="singh@gmail.com" //override the value.

//Object.freeze(JsUser) //now we cannot change anything in the Object.

JsUser.name = "r p singh" //it can't give error.you try to override but it can't override.

console.log(JsUser)
/*{
  name: 'Rudra',
  'Full name': 'Rudra Pratap Singh',
  mysym: 'my key1',
  age: 20,
  location: 'Ranchi',
  email: 'singh@gmail.com',
  isLoggedIn: false,
  lastloginDays: [ 'monday', 'saturday' ],
  Symbol(key1): 'key1'
}*/

JsUser.greeting = function(){
    console.log("Hello JSUSER");
    
}
JsUser.greetingtwo = function(){
    console.log(`Hello JSUSER, ${this.name}`);
    
}
// console.log(JSUser.greeting)
JsUser.greeting()
console.log(JsUser.greetingtwo())
