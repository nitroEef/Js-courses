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

const numbers = [1,2,3,4,5,6];
const newNumber = 