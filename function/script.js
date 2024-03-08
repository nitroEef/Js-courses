// function 
// function can be declared in three ways
// 1. function declaration
// 2. function expression
// 3. arrow function
// function is a block of code to perform a particular task 
// () parenthesis 
// {} curly braces or block




// 1..... function declaration 
function square (number) {//params is passed in the parenthesis 
    // statement 
}
square()


// 2.....function expression
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


// // nested function 
// function getScore(){
//     const num1 = 2;
//     const num2 = 3;
//     const name = "dlt africa"

//     function add() {
//             return `${name} is ${num1 + num2} years old`
//     }
//     return add ();
// }

// console.log(getScore())


const nestedFunction = (a , b ,c) => {
    const anotherFunction = () => {
        return `${a + b + c}`
    }

    return anotherFunction();};
    console.log(nestedFunction(2,4,6,))


    function subNumbers(param1, param2) {
        return param1 > param2;}
      
      let it= subNumbers(55,45);
      console.log(it)





    //   declare a function with two parameters , check if the addition of the two parameters
    //   is >=10 , it should return a statement showing " sum is greater than or equals to", if not-
    //   we should have teh param1 + param2

    function addNumbers(a, b) {
        return a + b >= 10 ? "sum is greater or equals to 10" : a + b;
    }

    const greater = addNumbers (9, 10)
    console.log(greater);

    const lesser = addNumbers(3, 4);
    console.log(lesser)


    // chc=eck for even numbers 
    const isEven = (nestedGame) => {
        return nestedGame % 2 === 0 ? true : false;
    }

    const even = isEven(6);
    console.log(even)

    const odd = isEven(7);
    console.log(odd)

    // check for prime 
    function isPrime (number) {
        if (number <= 1) {
            return false;
        }
    }

for (let i= 2; i <= Math.sqrt(number); index++) {
        if (number % i === 0) {
            return false;
        }   
}
    return true;

    const prime = isPrime(3)
    console.log(prime)

///////////
/////////
///function