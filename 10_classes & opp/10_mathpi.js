const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
//{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

// console.log(Math.PI);//3.141592653589793
// Math.PI=5 // value can't override
// console.log(Math.PI);//3.141592653589793

const chai = {
    name:'ginger chai',
    price:250,
    isAvilable:true,

    orderchai : function(){
        console.log("chai ni bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{writable:false,enumerable:false})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// if enumerable : false {name can't come in iteratable}
//if enumerable : true {name can come in iteratable}
for (let [key,value]  of Object.entries(chai)) {
    if(typeof value!='function')
        console.log(`${key} : ${value}`);
    
    
}