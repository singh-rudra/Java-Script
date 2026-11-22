const myobj = {
    js : 'javascript',
    cpp: 'c++',
    py: 'python'
}

// FOORIN Loop

for(const key in myobj){
    console.log(`${key} : ${myobj[key]}`)
}
// js : javascript
// cpp : c++
// py : python

const arr = ["js","py","c++"]
for(const i in arr){
    console.log(arr[i])
}
// js
// py
// c++


// FOR EACH Loop

const coding1 = ["js","py","c++"]
coding1.forEach( function (item){
    console.log(item)})
// js
// py
// c++

coding1.forEach( (val)=>{console.log(val)})

function printme(item){
    console.log(item);
    
}
coding1.forEach(printme)

coding1.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// js 0 [ 'js', 'py', 'c++' ]
// py 1 [ 'js', 'py', 'c++' ]
// c++ 2 [ 'js', 'py', 'c++' ]


const mycoding =[
    {langname: "javascript",
      languageFile:"js"  
    },
    {langname: "java",
      languageFile:"java"  
    }
]
mycoding.forEach( (item)=>{
    console.log(item.langname);
})
// javascript
// java


//.      FILTER

const mynums = [1,2,3,4,5,6,7,8,9,10]
const value=mynums.filter((num)=> num>4)
console.log(value); //[ 5, 6, 7, 8, 9, 10 ]

const value1=mynums.filter((num)=> {
    return num>4
})
console.log(value1); //[ 5, 6, 7, 8, 9, 10 ]

const newnums=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums) //[ 5, 6, 7, 8, 9, 10 ]



//           MAP

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums1 = myNumbers.map((num) => num+10)
console.log(newNums1);
//  [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]


//chaining
const myNumbers1 = [1,2,3,4,5,6,7,8,9,10]
const newNums2 = myNumbers1.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>16)
console.log(newNums2);
// [
//   21, 31, 41,  51, 61,
//   71, 81, 91, 101
// ]


//.         REDUCE
// It having two parameter (Accumulator , currentValue)

const Nums3 = [1,2,3]
const total = Nums3.reduce((x,y)=> x+y,0) // x:accumultor , y : currentvalue , 0 : initial value , if we want we can't give initial value.
console.log(total); //6

const shooping = [
    {
        item:"js course",
        price:599
    },
    {
        item:"py course",
        price:999
    }    
]
const add = shooping.reduce((acc,item)=>(acc+item.price),0)
console.log(add); //1598

