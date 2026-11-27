function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username) // call first parameter is this (optional)

    this.email = email
    this.password = password
}

const code = new createUser ("abc", "abc@gmail.com","123")
console.log(code);