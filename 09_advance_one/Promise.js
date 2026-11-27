//Promise : It is an object representing the eventual completion or failure of an asynchronous operation.    

 // creating an promicse
const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task : Db calls , cryptography , network calls
    setTimeout(function(){
        console.log('Asyn task is compelete');
        resolve()
    },1000)
})

//consuming a promise
//then has direct connection with resolve
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2"); 
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn 2 resolved')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abc",email:"abc@gail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(resolve,reject){
        let error =true
        if(!error){
            resolve({username:"abc def",passward:"123"})
        }
        else{
            reject('Error : Something went wrong')
        }
    },1000)
})

// promiseFour.then(function(e){
//     console.log(e);   
// }).catch(function(e){
//     console.log(e);   
// })

promiseFour
.then((user)=>{
    console.log(user);
    return user.username 
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);  
}).finally(()=> console.log("Finally"))


promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(resolve,reject){
        let error =true
        if(!error){
            resolve({username:"JavaScript",passward:"123"})
        }
        else{
            reject('Error : JS went wrong') // reject : error code
        }
    },1000)
})

// it not directly not handle error
async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);    
    } 
}
consumedPromiseFive()

// async function getAllusers(){
//     try {
//         const responce = fetch('https://jsonp;aceholder.typeicode.com/users')
//     const data = await responce.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E :",error); 
//     }
// }
// getAllusers()

fetch('https://jsonp;aceholder.typeicode.com/users').then((responce)=>{
    return responce.jason()
}).then((data)=>{console.log(data);
}).catch((error)=>console.log("Error"))

// fetch : fetch() method starts the process of fetching a resources from the network,
//         returning a promise which fulfilled once the responce is available.