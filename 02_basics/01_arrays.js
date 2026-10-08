/* Arrays */
//Array in jS is object we can keep multiple items in single variable
//JS arrays are resizable
//no associative arrays => to access value we find using indexing 
// in JS when we do array-copy-operation it creates shallow copies 
//Shallow copy => it is the copy of an object whose porpeties share the same reference points
//Deep copy => a deep copy of an object is a copy whose properties do not share the same reference


// way to formation of array.
// the elements of array is of any datatype. and you can store multiple data-type elements at same time.
const myArr = [0,1,2,3,4,5]
const myArray1=["Rudra",3,57,true,]
const myArr2 = new Array(1,2,3,4) 
console.log(myArr2) //[1,2,3,4]

// we can acess the elemets the of array by using indexing.
console.log(myArray1[0]) // Rudra


/* Arrays methods */

// push & pop
myArr.push(6) // it add the element at end.
myArr.pop() // it remove last element . can't required any argument.

// shift & unshift
myArr.unshift(9) // it add the element at first index and shift the other elements of array.
myArr.shift() // it remove first element , and shift other element.

// includes & indexOf
console.log(myArray1.includes(9)) // it return boolean values .(it check 9 present in myArray1).
console.log(myArray1.indexOf(9)) // it give index of an element (if ele not present it give -1).


const myArr1 = [0,1,2,3,4,5]

// join
const newArr = myArr1.join() // it convert array into string.
console.log(myArr1) // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr) // 0,1,2,3,4,5

// slice and splice
const myn1=myArr1.slice(1,3) // it give subArray of array from start-index to (ending-1)-index. "it can't manipulate original Array."
console.log(myn1) //[ 1, 2 ]
console.log(myArr1) // [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr1.splice(1,3)// it give subArray of array from start-index to (ending)-index.
// "it manipulate original Array." , this removes the spliced elements from the array.
console.log(myn2) //[ 1, 2, 3 ]
console.log(myArr1) //[ 0, 4, 5 ]


// push() : it create nested array."it manipulate original Array."
const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
marvel_heroes.push(dc_heroes) 
console.log(marvel_heroes) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// acessing the nested array element.
console.log(marvel_heroes[3][1])// flash


// concat() : it add two or more arrays and return new array."it can't manipulate original Array."
const marvel_heroes1=["thor","ironman","spiderman"]
const dc_heroes1=["superman","flash","batman"]
const allHeros = marvel_heroes1.concat(dc_heroes1) 
console.log(allHeros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// spread operator (...) : used to expand / unpack the elements , here you add multiple array.
const allnewHeroes=[...marvel_heroes1,...dc_heroes1]
console.log(allHeros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//flat : it remove nested array levels. in parameter you pass how many depth you want remove.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = another_array.flat(Infinity)
console.log(realArray) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


//data scraping :

// It check the parameter is array or not.
console.log(Array.isArray("Rudra"))// false 
console.log(Array.isArray([1,2,4,7,57,"Rudra"]))//true.

// It convert parameter into array . if it not able to convert it give [].
console.log(Array.from("Rudra"))//[ 'R', 'u', 'd', 'r', 'a' ]
console.log(Array.from({name:"Rudra"}))// [] , here you have to tell that make from keys or values

//It returns a new array from the set of elements.
let s1=100
let s2=200
let s3=300
console.log(Array.of("Rudra"))//[ 'Rudra' ]
console.log(Array.of(123,234))//[ 123, 234 ]
console.log(Array.of(s1,s2,s3))//[ 100, 200, 300 ]

