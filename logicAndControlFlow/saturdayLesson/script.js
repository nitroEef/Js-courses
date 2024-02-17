
 // VARIABLE:Global and local scope variables

// Global Variable

let i;
for(i = 0; i < 5; i++){
    let p = 10;
    console.log(i+p)
}
console.log(i)

// OPERATORS AND EQUALITY
// Arithmetical operators

// +,-,*,/,%,==.===, increment

// minus (-);

let costs = 15
let profits;
let salesprices = 20

profits = salesprices - costs;

console.log(profits)



// plus (+)

let cost = 15, profit = 5, salesprice = cost + profit;
console.log(salesprice);


// let firstNames = "Olatunde", surnames = "Tobi ", fullName = surnames + firstName;
// console.log(fullName + " " + 'is a big boy')


let firstName = "Olatunde", surname = "Tobi ", fullNames = surname + firstName;
console.log(`${fullNames} is a big boy`)



// Back tick (``)
let food = 'Rice'
console.log(`what will i eat, if not ${food} ?`);

let A = 2;
A *= 4;
console.log(A)