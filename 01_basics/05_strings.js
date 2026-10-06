const name = "Rudra"
const repoCount = 7
const gameName = new String('Dsa-java')
console.log(name+repoCount+" value")// Rudra7 value

//using backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//you can acess by the index.
console.log(name[0])
console.log(gameName[2])


//some methods of string

console.log(name.length)//5
console.log(gameName.length) // 8

console.log(gameName.toUpperCase())// DSA

console.log(gameName.charAt(2))//a

console.log(gameName.indexOf('D'))//0

const newString = gameName.substring(0,4)//Dsa-

const newString1 = gameName.substring(-6,4)//Dsa- ,substring ignore -ve index.
console.log(newString)//Dsa-

const anotherString=gameName.slice(-6,4)//a-

const str1 = "  rudra  "
console.log(str1.trim())//rudra ,remove starting and ending space.

const url="https://rudra.com/singh%178abc"
console.log(url.replace('%20','-'))//https://rudra.com/singhabc
console.log(url.includes('singh'))//true

console.log(gameName.split('-'))//['Dsa-',;java'] , syntax : .split(seprater , limit).

/*     
    To study all methods of string go to google - inspect type any string(ex: const str=new String('Ruudra')) and call it .    
*/

