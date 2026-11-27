const user = {
    username: "Rudra",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got user details from database");
        //console.log(this.username)
    }
}
console.log(user.username);

console.log(user.getUserDetails())

//new : new keyword is used to create a new contex (constructer function)

function User(username,loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn
     this.greetings = function(){
        console.log("hello ",this.username);
        
     }

    //return this (it defaultly exits)
}

const userOne = new User("Rudra", 12, true)
const userTwo = new User("abc", 10, false)
console.log(userOne.constructor);
console.log(userTwo);