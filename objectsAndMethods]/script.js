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
