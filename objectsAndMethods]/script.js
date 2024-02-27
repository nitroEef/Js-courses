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


const employeesInfos = object.keys(employees)
console.log(employeesInfos)


//object.value()
// it creates and return an array containing the value of an object 
const session ={
   id : 1,
    date: "27-2-2024",
     device: "mobile",
    browser : "chrome",
}

const sessionValue= object.value(session)
console.log(sessionValue)




//object.entries()
// it creates a nested array of the key and value pairs of an object 
const operatingSystem ={
     name : "linux",
     version: "18-04",
     license: "open source",
 }
 