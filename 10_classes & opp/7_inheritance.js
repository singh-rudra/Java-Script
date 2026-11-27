// this refers current contest

class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`User Name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,passward){
        super(username)
        this.email=email
        this.passward=passward
    }
    addCourses(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai =new Teacher("chai","chai@gmail.com",123)
chai.addCourses()
const masaChai = new User("masalachai")
masaChai.logme()
// masaChai.addCourses() //it is not acces able

console.log(chai===masaChai); // false
//instanceof : chai Teacher sa bani hai 
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
