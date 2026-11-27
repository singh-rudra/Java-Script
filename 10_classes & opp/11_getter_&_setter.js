class User{
    constructor(email,passward){
        this.email=email
        this.passward=passward
    }
    // if we use "get" you always to use "set"
    // passward should override
    get passward(){
        return `${this._passward}abc` // get ma always return
    }
    set passward(value){
        this._passward=value
    }
}

const rudra = new User("rudra@gmail.com","abc")
console.log(rudra.passward);

