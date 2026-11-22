let a = 300
const b = 20
//var c = 30

// {} --> scopes

// The "let & const" variable can't be accesable outside the scope. But the " var & default " variable accesable outside the scope. 

// { statement inside the baracet is block scope } & outside is global scope.

if (true){
    let a = 10
    const b = 20
    console.log("Inner : ",a)
}
console.log(a)


function one(){
    const username = "Rudra"

    function two(){
        const webside = "Youtube"
        console.log(username)
    }
    //console.log(webside) ,webside can't be accesable.
    two()
}
one()



// +++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++

function adddone(num){
    return num+1
}
adddone(5) // if we want we call the function before decleration.


const addTwo = function(num){
    return num+2;
}
addTwo() // we can't call the function before decleration.