function User (email, password){
    this.email=email
    this.password=password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email
        },

        set: function(value)
        {
            this._email = value
        }
    }
)
}

const code = new User("abc@gmail.com", "codeabc")

console.log(code.email);
