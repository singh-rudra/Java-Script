/* 
constant(const) variable data was fixed after declarition it can't be change.

the value of ( let , var ) would be changed.
prefer not to use var,
because of issue in block scope and functional scope

 */
const accountId = 144553 //declaring constant in a variable.

let accountEmail = "rudra@google.com"

var accountPassward = "12345"

accountCity = "Ranchi" //we declar variable without any keyword.

let accountState; // we use or not (;) no problem.
// if you declare variable and not store any value , so js treat as undefined.

// accountId=234 ,not allowed.
accountEmail="singh.com"
accountPassward="76467"
accountCity="Gumla"

console.table([accountId,accountEmail,accountPassward,accountCity,accountState]) // It print all the variable values in tabular structure.

/* output :
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 144553      │
│ 1       │ 'singh.com' │
│ 2       │ '76467'     │
│ 3       │ 'Gumla'     │
│ 4       │ undefined   │
└─────────┴─────────────┘
 */


