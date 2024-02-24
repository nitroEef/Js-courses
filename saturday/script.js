// AND Operator

let result;
let age = 25;

if(age > 20 && age < 30) {
    result = age + 50;
}else {
    result = age;
}

console.log(result);


// OR Operator

let costs = 40;
let selPrice;
let profits = 10;

if (costs >= 50 || costs === 55) {
    selPrice = costs + profits;
}
else{
    selPrice = costs;
}

console.log(selPrice);

// NOT Operator
let name = "Hayzed";

if(name !== "Hayzed") {
    console.log("Why are u lying");
}
else {
    console.log("That is good")
}

//loop while
let num = 5;
let i = 0;
while (i < num) {i++;
    console.log(i)

}

//for loop

for (let index = 0; index < num; index++){
    console.log(index)
}

//checking for a leap year
//conditions
//the year divided by 4 should have a remainder of zero
//the year divided by 100  should have a non zero remainder 
//if divided by 100 gives no remainder, then divided by 400 should give a remainder

const year = prompt("Enter the year");

const checkLeap = (year) => {
    let result;
    if((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
        result = "Yes! it is a leap year";
    }
    else{
        result = "No! it is not a leap year"
    }

    return result;
}

const answer = checkLeap(2000)

alert(answer);
// console.log(answe
