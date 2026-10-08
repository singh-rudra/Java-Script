/* Arrays methods */

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


console.log(Array.isArray("Rudra"))// false , it check the parameter is array or not.
console.log(Array.isArray([1,2,4,7,57,"Rudra"]))//true.

// Array.from() : It convert parameter into array . if it not able to convert it give [].
console.log(Array.from("Rudra"))//[ 'R', 'u', 'd', 'r', 'a' ]
console.log(Array.from({name:"Rudra"}))// []

// Array.of() : It returns a new array from the set of elements.
let s1=100
let s2=200
let s3=300
console.log(Array.of("Rudra"))//[ 'Rudra' ]
console.log(Array.of(123,234))//[ 123, 234 ]
console.log(Array.of(s1,s2,s3))//[ 100, 200, 300 ]


