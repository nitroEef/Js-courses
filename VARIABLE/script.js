// variables
// there are three ways to declare a variable
// const , var and let

// let allows u to chnage the variable value
// const cant  be chnaged.  whatever value u add to const it cannot be renamed

let message = "hello eef";
 message = "hello Zainab";
console.log(message);


const greeting ="good mornin my Neihbor";
console.log(greeting)


const _name$ = " al fulani ileya 🏡 ";
console.log(_name$)

console.log(message, greeting)

// classwork

let studentName = "ajibade lateef olabode nitroEef";
studentName = "aisha"
console.log(studentName);

let _Club1$ = "chelsea";
console.log(_Club1$)

let _Club2$ = "liverpool";
console.log(_Club2$)

let _Club3$ = "arsenal";
console.log(_Club3$)

// JAVASCRIPT DATA TYPE 
// PRIMITIVE AND NON PRIMITIVE
// PRIMITIVE DATA TYPE CAN ONLY STORE ONE DATA 
// WHILE NON PRIMITIVE CAN STORE MANY Data
// PRIMITIVE : STRING, NUMBER, BIGINT , BOOLEAN , UMDEFINED , NULL, SYMBOL, TYPE OF
// NON PRIMITVE : OBJECTS, ARRAY,DATE 

// 1. STRING : we have single String ''
//             double string  " "
//              backticks ``

    const singleQuote = 'who am i?';
    const doubleQuote = " who are you ?"
    console.log(singleQuote)
    console.log(doubleQuote)

let name = " team lead";
const backTick = `Hello ${name}`
console.log(backTick);

let newName = 'toheeb';
let favoriteDrink = 'bobo';
const details = `my name is ${newName}, and my favorite drink is ${favoriteDrink}`;
console.log(details)


const numberOne =  22;
const numberTwo =  11;

const add = numberOne + numberTwo;
console.log(add)

const sub = numberOne - numberTwo;
console.log(sub)

const div = numberOne / numberTwo;
console.log(div)

const mul = `${numberOne * numberTwo}`;
console.log(mul)


// BOOLEAN - TRUE OR FALSE 
// it is used to change comdition if the condition is either true or false 
const isBeautiful = false;

if (isBeautiful) {console.log("this woman is beautiful")
    
} else 
    {console.log("this woman is ugly")
}

//null

let age=null;
console.log(age);

//undefined

let x ;
console.log(x)

// symbol 
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1.description);

z