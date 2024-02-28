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

// // to get the equality 
// const numbers =  [1,2,3,4,5,6];
// const copiedNumber = numbers;
// const newNumber = [...numbers];
// const numbers$ = numbers.slice(2,4)

// console.log(copiedNumber);
// console.log(numbers===copiedNumber);
// console.log(numbers===newNumber);

// numbers.push(12);
// console.log(numbers)
// console.log(numbers$)

// console.log(copiedNumber)
// console.log(newNumber)


// //object cloning

// const personDetails = {
//     name : "zainab",
//     age : 40 
// }
// const changeDetails = personDetails;
// personDetails.age = 10
// console.log(personDetails)
// console.log(changeDetails)

//shallow clone using assign object
// const originalObject = {
//     name : "Bash",
//     age : 20,
//     address : {
//         city : "pegamut",
//         state : "Ogun "
//     }
// };

// const cloneObj = Object.assign({}, originalObject);
// cloneObj.name = "Naphy";
// cloneObj.address.city = "Elejigbo"

// console.log(originalObject)
// console.log(cloneObj)





//spreading operator
const arr1 = [1,2,3,4];
const arr2 = [4,5,6,7];
const merged = [...arr1,...arr2];
console.log(merged)


const text = {name :"Bode"};
const numbs = [1,2,3,4];
const cloneMerged = {...text, data:[...numbs]}
cloneMerged.name = "az";
cloneMerged.data.push(5);

console.log(text)
console.log(numbs)
console.log(cloneMerged)


//deep clone is an object in javascript. this means creating a new oject that is
//  entirely sepearated from the original object, such that change in the 
// new object do not affect the original and vice versa. this will creste a new object but
//  nested object will still be reference to the original one

// const details = {
//     firstName : "kenny",
//     car : {
//         brand : "toyota",
//         wheels : 4,
//         color : "red"
//     }
// }

// const  newDetails = {...details}
// newDetails.firstName = "mike",
// newDetails.car.color = "blue"


// console.log(details);
// console.log(newDetails)



// the json.stringify method convert a js object or any format
//  to string and during this process all the reference are destroyed 
const details = {
    firstName : "kenny",
    car : {
        brand : "toyota",
        wheels : 4,
        color : "red"
    }
}
const stringifiedDetails = JSON.stringify(details);
console.log(stringifiedDetails);

const newDetails = JSON.parse(stringifiedDetails);
console.log(newDetails);

newDetails.car.color = "blue"
console.log(details.car.color)
console.log(newDetails.car.color)


const originalObj ={
    name : "zainab",
    age : 12,
    address : {
        local :"agege wa",
        area: 'baba yemi'
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalObj));
cloneObj.name = 'soliu'
cloneObj.age = 54
cloneObj.address.local = 'pegamut'
cloneObj.address.area = "mujayyidun"

console.log(originalObj)
console.log(cloneObj)

