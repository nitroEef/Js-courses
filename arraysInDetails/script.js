const cohort = ["soliu",
"mufu", 
"tobi",
 "seyi",
 "dele",
 "dad",
];
console.log(cohort);
const change = (cohort[1] = "Bash")
cohort[6] = "thewy"

// my own..

// for (let i = 0; i < cohort.length; i++) {
// console.log(cohort[i])}

// tutors own 
for (let i = 0; i < cohort.length; i++) {
     console.log(i,cohort[i])}

    //  using ternary operatpr 
    for(const month of cohort){
        console.log(month)
    }

    // example 



// /example

const nested = [[1,2], [3,4] [5,6]]
const newArr = nested[0]
console.log(newArr);

const object ={
    name :"john",
    age : 60
}
console.log(object)



//example

const arr = [
    "banana",
    10000,{
        name : "bala blu",
        age : 80
    },

    function name() {
        alert("boooooooom")
    }
]

// /array method

/************push()***********/

// push method 
// it adds new element to the end of an array 
const students = ["yemi", "sola", "grace", "femi","bola","mariam"]
console.log(students);
const pushed = students.push("obaby", "bade", "buyty")
console.log(pushed)
console.log(students)


/************pop()***********/


// pop method 
// it removes the last element of the array 

const numbers = [3,4,5,6,7,8,9]
console.log (numbers)
const popping = numbers.pop()
console.log(popping)
console.log(numbers)


// /************shift()***********/ this is to remove the first element of the array
const colors = ["violet", "red", "blue", "black"];
console.log(colors)
const removeFirst = colors.shift()
console.log(removeFirst)
console.log(colors)

// /************unshift()***********/ this is to add the first element of the array
const months = ["march", "july", "september", "january"]
console.log(months)
const addMon = months.unshift("feb")
console.log(addMon)
console.log(months)



// /************splice()***********/ this is to add and removeelement of the array
// three parameters 
// the element u want to add
const countries = ["kenya", "malaysia", "canada", "Qatar","niger"]
console.log(countries)
countries.splice (3, 1, "egypt", "ghana","morrocco")
console.log(countries)


const championsLeagueSemifinal = ["arsenal","barcelona", "realmadrid","bayern"]
console.log(championsLeagueSemifinal)
 championsLeagueSemifinal.splice (0,1, "napoli")
console.log(championsLeagueSemifinal)


// one para where the new element will replace

const wears = ["gucci", "versace","dg", "nike", "louis"]
console.log(wears);

wears.splice(2)
console.log(wears)


// 2 parameters example , number of element u want to replace and delete
const drinks = ["coke", "viju","gin", "exotic", "bobo"];
drinks.splice(2,1)
console.log(drinks)


/**************slice()***********/
const men =["tunmise", "kenny", "soliu", "bode","abee", "az"]
console.log(men)
const newGuy = men.slice(1,5)
console.log(newGuy)


const newString = "nafeesah"
console.log(newString.length);
const newSlice = newString.slice(2,5)
console.log(newSlice)


const myName = "lateef"
console.log(myName)
const newName = myName.slice(2,5)
console.log(newName)


const BaddestMen = men.slice (2,5)
console.log(BaddestMen)


const coolestamong = men.slice(4)
console.log(coolestamong)


/**************to string()***********/


