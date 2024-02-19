// function 
// function can be declared in three ways
// 1. function declaration
// 2. function expression
// 3. arrow function
// function is a block of code to perform a particular task 
// () parenthesis 
// {} curly braces or block



// 1. function declaration 
function square (number) {//params is passed in the parenthesis 
    // statement 
}
square()


// function expression
const nameFunction = function(params) {}


//arrow function
const arrowFn = () => {}


function sayHello(Name){
    console.log(
        `hello ${Name}`
        )}

sayHello('az')
sayHello ('class captain')




function sayHello(name) {
    console.log(`Hello ${name}`);
}
sayHello("azx");



const division = (number) => {
    return number / number;
}
const answer = division(4)
console.log(answer)
 






function add(number) {
    return number + number
}
const sum = add(2);
console.log(sum)





// classwork 
function subNumbers(param1, param2) {
  return param1 - param2;}

let result= subNumbers(55,45);
console.log(result)

// or 

const subtraction= (a, b) =>{
    return a - b;
};

const minus = subtraction(12,4);
console.log(minus);

