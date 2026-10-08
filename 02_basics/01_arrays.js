/* Arrays */

/* In js arrays are resizeable , contains a mix of different data-types */
const myArr = [0,1,2,3,4,5] // the elements of array is of any datatype. and you can store multiple data-type elements at same time.
const myArray1=["Rudra",3,57,true,]

// other way to declare array.
const myArr2 = new Array(1,2,3,4) 
console.log(myArr2) //[1,2,3,4]

// we can acess the elemets the of array by using indexing.
console.log(myArray1[0]) // Rudra


/* Arrays methods */

myArr.push(6) // it add the element at end.
myArr.pop() // it remove last element . can't required any argument.

myArr.unshift(9) // it add the element at first index and shift the other elements of array.
myArr.shift() // it remove first element , and shift other element.

console.log(myArray1.includes(9)) // it return boolean values .(it check 9 present in myArray1).

console.log(myArray1.indexOf(9)) // it give index of an element (if ele not present it give -1).


const myArr1 = [0,1,2,3,4,5]

const newArr = myArr1.join() // it convert array into string.
console.log(myArr1) // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr) // 0,1,2,3,4,5

// slice and splice
const myn1=myArr1.slice(1,3) // it give subArray of array from start-index to (ending-1)-index. "it can't manipulate original Array."
console.log(myn1) //[ 1, 2 ]
console.log(myArr1) // [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr1.splice(1,3)// it give subArray of array from start-index to (ending)-index. "it manipulate original Array."
console.log(myn2) //[ 1, 2, 3 ]
console.log(myArr1) //[ 0, 4, 5 ]

