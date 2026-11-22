// if statement

const isUserloggedIn = true
if(isUserloggedIn){

}

// < , > , <= , >= , == , != , ===

const score = 200
if(score>100){
    const power = "fly"
    console.log(`User power : ${power}`)
}

const balance = 1000
if(balance>500) console.log("test")

/*
if(condition){

}
else{

}  


if(condition){

}
else if{

}
.
.
else{

}
*/    

// operators : && , || 

/* switch syntex :

    switch (key){
    case value : 
            break;
            
            
            
    default :
            break;
    }
*/

const month = 3
switch (month){
    case 1:
        console.assert.log("january");
        break;
    case 3:
        console.log("March");
        break;
    default :
        console.log("Invalid")
        break;        
}


const useremail = "Singh@abc.com"

if(useremail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy value : false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN.
// truely value : "0" , 'false' , " " , [] , {} , function(){} (empty fun)


const userEmail = []
if(userEmail.length ===0){
    console.log("Array is empty")
}

const emptyobj = {}
if(objectkeys(emptyobj).length===0){
    console.log("Object is empty")
}

// Nullish coalescing Operator (??): null undefined
 let val1;
 val1 = 5 ?? 10
 console.log(val1) //5
 val1 = null ?? 10
 console.log(val1) //10
 val1 = undefined ?? 15 //15


 // Terniary Operator
  
condition ? true : false

const ice =100
ice >= 80 ? console.log("less"):console.log("more")