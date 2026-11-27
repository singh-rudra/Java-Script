class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`User Name : ${this.username}`); 
    }
    static createId(){
        console.log(`123`);
    }
}
const rudra = new user()
// rudra.createId() , In JS , static methods are accessed using the class name , not the object

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher("iphone","iphone@gmail.com")
iphone.logme()
// iphone.createId() , it also not acessable by child class because of static