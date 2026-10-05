// In comparision they return boolean values.

console.log(2>1) //true
/* 
In most case we avoid this conversion (use clean code):

console.log("2">1) //true
console.log("02">1) //true

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true 
//The reason is that an equality check == and comparision > < >= <= works differently.
//comparision convert null to a number , treat it as 0.
//that's why (3) null>=0 is true and (1) null>0 is false.

console.log(undefined==0) //false
console.log(undefined>0) //false
console.log(undefined<0) //false
*/

// === (strict check) it checks value and datatypes.
console.log("2"===2) //false