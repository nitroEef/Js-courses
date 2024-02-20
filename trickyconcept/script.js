// advantages of global scope
// 1. yiu can access the global variable from all the functions in a program
// 2. it is ideally used for storing constant as it helps to keep consistency
// 3. a global variable is used fwhen multiple functions are accessing the ssme Data 


// disadvantages 
// 1.too many variables declard as global then they remain in the memory till program execution
// is completed, this can cause out of memory isSecureContext2.
// 2. it may give unpredictable results in multitasking environment
// 3.if global variables are discontinued due to code refactoring you will need to Change 
// all the modules where they are Called


// local scope
// 1. variable declare inside are in the local scope
// 2. local variables offer a guarantee that the values of guarantee will remain intact while the task is running
// 3. local variables are deleted as soon as any function is over and release the memory space which it occupied.

// disadvantages for local scope
// 1. they have a very limited scope
// 2.

const name = "zainab";
const age = 17
const school = "agege primary school, orile"

const one = () => {
    return `${name} of ${age} years attended ${school}`;
}

const answer = one()
console.log(answer)


// const file = () => {
//     returns `${name} likes eating ${age} wraps of semo in ${school}`
// }
// const sentence = file();
// console.log(sentence)

//local scope

const localScope = () => {
    const ename = "oloye pupo";
    const religion = "muslim";
    const activity = "drinking of wine";

    return `${ename} who is a ${religion} enjoys ${activity}`;
}

const oloye = localScope()
console.log(oloye)


// block scope
const religion = "christian";

const exampleThree = () => {
    const name = "chima"
    if(true){
        const schoolName = "LASU"

        console.log(`${name} is a ${religion} and goes to ${schoolName}`)
    }
}

// Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

// Features of Hoisting:
// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
// It allows us to call functions before even writing them in our code. 
// Note: JavaScript only hoists declarations, not initializations.

// JavaScript allocates memory for all variables and functions defined in the program before execution.




//  HOISTING

const a = 2
const b = 3

const result = exampleFive()
console.log(result)

function exampleFive() {
    return 2 + 2
}