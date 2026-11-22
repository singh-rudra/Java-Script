// (IIFE) : Immediately Invoked Function Expressions.
// means : Immediately execute the function.  and  global scope ke polllution sa problem hoti hai kai baar to use global scope ka 
// variables ka pollution ko hatana ka liye iife ka use karta hai.

// ()() : first ()--> function definations , ()-->execution call
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})(); // first code end by ;

//arrow function
((name)=>{
    //Unnamed IIFE
    console.log(`DB CONNECCTED TWO ${name}`)
})("Rudra")