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



// /************splice()***********/ this is to add the first element of the array
const countries = ["kenya", "malaysia", "canada", "Qatar","niger"]
console.log(countries)
countries.splice (3, 2, "egypt", "ghana")
console.log(countries)




