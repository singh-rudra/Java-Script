let myName = 'Rudra     '
let mychannel = 'youtube     '
console.log(myName.length);

let myHeroes = ['thor','spiderman']
let heroPower = {
    thor :'hamer',
    spiderman:'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

// inject power in Object {note : every one should have power}
Object.prototype.Rudra=function(){
    console.log(`Rudra is present in all object`);

// inject power in Array { note : only array should having power}
Array.prototype.heyyabc = function(){
    console.log("Hey abc");
}
myHeroes.heyyabc()
    
}
heroPower.Rudra()
myHeroes.Rudra()


//Inheritance

const user ={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher = {
    makeVideo : truw
}
const TeachingSupport={
    isAvailable : false
}
const Tasupport={
    makeAssignment:'JS assignment',
    fullTime :true,
    __proto__:TeachingSupport
}
Teacher.__proto__=user


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "abc   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`); 
}
anotherUsername.trueLength()