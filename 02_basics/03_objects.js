// objects in constructer.

const tinderUser = new Object() // singleton object.
// const tinderUser2 ={} //non singleton object

console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Rudra"
tinderUser.isLoggedIn = false

console.log(tinderUser)

// nested objects
const regularUser ={
    eamil:"random@gamil.com",
    fullName:{
        usersFullname:{
            firstName:"Rudra",
            lastName:"Singh"
        }
    }
}    

// accessing by dot operator.
console.log(regularUser.fullName.usersFullname.firstName)

// merge
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const object3= { Object1 , Object2 }  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const Object3 =Object.assign({}, Object1, Object2)
                            // target,source,source  (target :optional)
const obj3 ={...obj1, ...obj2}
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user =[
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    }
]

user[1].email // accessing array of objects.

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // output : data-type is array.
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Rudra' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // check the property exist or not.
console.log(regularUser.hasOwnProperty("fullName"))