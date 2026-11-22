// FOROF Loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for(const i of arr){
    console.log(i);
}

const greeting = "hello world"
for(const greet of greeting){
    console.log(greet)
}

// Maps : a object it is not iteratable , & we can't use forin loop
// key should be unique & mantai order.

const map = new Map()
map.set("IN","India")
map.set('USA',"United States of America")
map.set("IN","India")
console.log(map) //Map(2) { 'IN' => 'India', 'USA' => 'United States of America' }

for(const key of map){
    console.log(key)
}
//[ 'IN', 'India' ]
//[ 'USA', 'United States of America' ]

for(const [key,value] of map){
    console.log(key,":",value)
}
//IN : India
//USA : United States of America

/*
 objects. are not iteratable
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for(const [key,value] of myObj){
    console.log(key,":",value)
}*/   

