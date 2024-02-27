// objects 
//objects are used to represent real life datas
//object is an unordered collextion of related data in form of key and value pairs 

const firstName = "Soliu"


const person ={
    firstName,
    surname : "az",
    age:157,
    children:{
        firstChild : "eef",
        secondChild : "Nafisah"
    } 
}
console.log(person)



//assessing and adding of properties to an object
const human = {
    firstName : 'Abdullah',
    "DLT africa location":"pegamut" 
}

human.pet = {name:"cobra", age:3}
human.job = "headmaster"
human.favFood = "garri"

console.log(human)
console.log(human.firstName)
console.log(human['firstName']) 
console.log(human['DLT africa location'])

//another way to call it out
console.log(human.pet.name)


//object built in method
const pet = {
    petName : "dog",
    petSound:() => {
        console.log("woof woof")
    }
}
pet.petSound()

//another example
const dog = {
    name : "fluffy",
    age : 2,
    listAllProperties:function(){
        console.log(this.name, this.age)
    }
}

dog.listAllProperties()

//built in method is a property that contains a function

// example 
const myObject={
    myMethod1: () => {},  //arrow function
    myMethod2: function() {}, //function declarattion
    myMethod3() {}
};

const animal = {
    name : "fluffy orange",
    age : 10,

    bark: () => {
        console.log("woof woof")   //built in
    }
}

console.log(animal.name);
animal.bark()

//5 types of objects
//object.keys 
//object.values
// object.entries
// object.freeze
//object.seal

//object.keys() it creates and return an array containing the keys of an object
const employees ={
    chairman : "deji",
    vice : "sola",
    auditor : "tobi",
    manager : "toyo",
    receptionist : "bayo",
}


const employeesInfos = Object.keys(employees)
console.log(employeesInfos);


//object.value()
// it creates and return an array containing the value of an object 
const session ={
   id : 1,
    date: "27-2-2024",
     device: "mobile",
    browser : "chrome",
}

const sessionValue = Object.values(session)
console.log(sessionValue);




//object.entries()
// it creates a nested array of the key and value pairs of an object 
const operatingSystem ={
     name : "linux",
     version: "18-04",
     license: "open source",
 }

 const operatingSystemInfo = Object.entries(operatingSystem)
 console.log(operatingSystemInfo);
 

 //freeze object
//  it prevents modificastion of existing properties and prevent properties from being added or removed
const user ={
    username : "eef",
    password: "kail4real",
}

const userinfo = Object.entries(user)
console.log(userinfo);

 //seal object
//  it prevents new properties from being added or removed

const user1 = {
    name: "Bode",
    Password:"12354",
}
const userInfo1 = Object.seal(user1)
userInfo1.surname = "Sade"
console.log(userInfo1)


let x;
const persons = {
    name: "Soliu",
    age: 12 ,
    isAdmin: true,
    address: {
        street: "Babayemi",
        city:"Lagos State",
        country: "Nigeria",
    },
    hobbies: ["Music", "Sport"]
}
//accessing an array inside object 


x = persons.hobbies[0]
// let y = person ["hobbies"][1]; 
y = persons.hobbies[1]

console.log(x, y)

//updating a property
persons.name = "eef"
console.log(persons);

persons.address.street = "bologba"
console.log(persons)

//to delete ..we use delete keyword
delete persons.address.state
console.log(person)


delete persons.address.city
console.log(person)

// it is only function expressiion that can be added to an object 
person.greet = function () {
    console.log(`hello, my name is ${this.name}`)
}
person.greet();


// // VALUE AND REFERENCE 
// divided into two copying primitive value, copy numbers and copy strings {it is going to behave as it is expected to be, u just need to
// see what is the value of the variable at the time of adsignment} and COPYING COMPLEX VALUE

// copying numbers 
let x1 = 2
let y1 = x;

x1 = 2
console.log(x1)
console.log(y1)

//copying strings

let firstPerson = 