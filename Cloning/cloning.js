const person = {
    firstName : "Tunmise",
    middleName : "Paul"
}
const otherPerson = person;
person.firstName = "Makalele";
console.log(person)
console.log(otherPerson)

// shallow cloning 
// // to create a new object that copies the top level
//  structure of the original object but not in its nested object of array,
//  in other word if the original object or array contains nested object 
//  or array, the shallow cloe will create new reference to those 
//  nested object rather than creating new copies. when u have nested object inside an object
//  the reference here will tamper the child object instead of the Main object
//spread operator(...);

//array clone

// const numbers = [1,2,3,4,5,6];
// console.log(...numbers);

// const newNumber = [...numbers];
// console.log(newNumber);

// to get the equality 
const numbers =  [1,2,3,4,5,6];
const copiedNumber = numbers;
const newNumber = [...numbers];
const numbers$ = numbers.slice(2,4)

console.log(copiedNumber);
console.log(numbers===copiedNumber);
console.log(numbers===newNumber);

numbers.push(12);
console.log(numbers)
console.log(numbers$)

console.log(copiedNumber)
console.log(newNumber)


//object cloning

const personDetails = {
    name : "zainab",
    age : 40 
}
const changeDetails = personDetails;
personDetails.age = 10
console.log(personDetails)
console.log(changeDetails)

//shallow clone using assign object
const originalObject = {
    name : "Bash",
    age : 20,
    address : {
        city : "pegamut",
        state : "Ogun "
    }
}







