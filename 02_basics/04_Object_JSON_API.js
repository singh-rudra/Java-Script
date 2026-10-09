// Destructuring of Object.
// you can also do destructuring of Arrays.


const course = {
    coursename: "java Script",
    price: "999",
    courseInstructer: "HC"
}

//course.courseInstructer
const {courseInstructer } = course //we just pass the key whose value want in the curly braces. and object .
console.log(courseInstructer) // now we directly access the value of courseInstructer multiple time, without using dot operator.

const {courseInstructer :ins} = course //we just pass the key : name whose value want in the curly braces., without using dot operator.
console.log(ins)

// destructuring of react.
// const navbar = () =>{
// }
// navbar(company = "abc")


// JSON API

//JSON : it is a object without name.
{
    "name" : "Rudra",
    "coursename": "Java Script",
    "price": "free"
} //in javascript the JSON API everything is in the string format

// APIs in the array.
[
    {},
    {},
    {}
]

// Lets use the API from Random user API
//to understand these APIs we can use the JSON formatter website
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}