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



// /************splice()*******/ this is to add and removeelement of the array
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
const menSting = men.toString()
console.log(menSting)

const text = menSting.includes("life")
console.log(text)

const nate = menSting.includes("abee")
console.log(nate)


// /**************sort()***********/ to show them alphabetically 
men.sort();
console.log(men)

const Alph = ["g", "f", "k", "a", "b", "z"]
Alph.sort();
console.log(Alph)

const number = [3,4,3,2,42,55,32]
number.sort();
console.log(number)


// ()=>{} call back function 
numbers.sort((a,b) => a - b);
numbers.sort((a,b) => b - a) ;
console.log(numbers)


// /**************indexof()**********/ counting from the beginning of an eleent from zero..
// it is used to search the first occurence 

const $number = [1,4,3,6,2,9,8,2,4,7,5,2]
console.log($number);

const index1 = $number.indexOf(3);
console.log(index1);

const tutor = ["abdullah" , "naheem", "anate", "seyi", "soliu"]
console.log(tutor);

const indextt = tutor.indexOf("ane")
console.log(indextt)

const lastIndex = $number.lastIndexOf(2);
console.log(lastIndex)


// /**************loop()***********/ 
const _names = ['zainab','basirat', 'nafeesah']

// /**************(es5)***********/ 

for (let i = 0; i <_names.length; i++) {
    console.log(i, _names[i])
}
// /**************(es6)***********/ 
for(const _name of _names)
console.log(_names)


// /**************foreach()***********/
_names.forEach(function() {}) 




// _names.forEach((name, i ,arr) => {
//     console.log(name);


_names.forEach((name, i, arr) => {
    console.log(name.toUpperCase());
    // console.log(i)
    // console.log(arr);
});

const _$numbers = [2, 4, 3, 1, 2, 4];
_$numbers.forEach(function(number, i){
    console.log(number)
});



const mammals = ["Lion", "Cow", "Dog", "Cat"]

mammals.forEach((mammal, i) => {console.log(mammal, i)} )

//EXAMPLE
let totalVal = 0;
const trans = [42, 45, 26, 4, 13,16];

trans.forEach((tran)=>{
    console.log(totalVal, (totalVal += tran),tran)
})
console.log(totalVal);

//example 4
_names.forEach((name) => console.log(`congratulations ${name} una dey smoke igbo `))




// /MAP METHOD
//EXAMPLE 1

const inventory = [
    {name:"rice",price:"4000"},
    {name:"beans",price:"4000"},
    {name:"semo",price:"4000"},
    {name:"yam",price:"4000"},
    {name:"Garri",price:"4000"}

]

const price = inventory.map((value)=>{
    return value.price
})
console.log(price)

// const NAMES = inventory.map((value))=>
// console.log(commodity)
const naMes = inventory.map((value) => {
    return value.name;
})

console.log(naMes);


// const tag = [
//     {
//         tab:1,
//         tab:2,
//         tab:3,
//         tab:4,
//         tab:5,
//         tab:6,
//         tab:7

//     }]

//     const tab = inventory.man((value)=>{
//         return value.tab
//     })
let double = [2,3,4,5,6,7]
let double$ = double.map((numb)=> {
    return numb * 2
})
console.log(double$)


//array filter

const digit = [-10, 0, -2, 4,-9, 5, -8]
const filteredDigit = digit.filter((number) => {
return number < 0 
} )
console.log(filteredDigit)

// //using filter for loop
const Filterednumber = []
for (let i = 0; i < digit.length; i++){
    if (digit[i] < 0){
        Filterednumber.push(digit[i])
    }
}

console.log(Filterednumber)

const employees =[
   { name : "mohmmed", overtime:10},
   { name : "Aisha", overtime:5},
   { name : "Bolaji", overtime:4},
   { name : "Chris", overtime:7},
   { name : "Ben", overtime:9},
   { name : "Munirat", overtime:12},

]

// const employeesToReward = employees.filter
// ((employee) => {
//     return employee.overtime >= 7 
    
// })

// console.log(employeesToReward)



//second example
const employeesToReward = employees.filter
((employee) => {
    return employee.overtime >= 7 
    
})


//third example
const employeesToRewardNames = employeesToReward.map((employee) => {
    return employee.name
})
console.log(employeesToReward)
console.log(employeesToRewardNames)


// employeesToRewardNames = forEach((name) => {
// console.log(`${name},you are congratulated`))
// }


employeesToRewardNames.forEach((name) => {
    console.log(`hi${name},you are congratulated`)
    })

    // loop method for the above example 
    for (let i = 0; i < employeesToRewardNames.length; i++) {
        console.log(`${employeesToRewardNames[i]}, you have received an award`);
    }

    //another example

    const creatures = [
        {animal:"shark", habitat:"ocean"},
        {animal:"whale", habitat:"ocean"},
        {animal:"Hippopotamus", habitat:"lake"},
        {animal:"lion", habitat:"savannah"},
        {animal:"monkey", habitat:"jungle"},
    ]

    const aquaticAnimals = creatures.filter((creature) => {
return creature.habitat === "ocean" || creature.habitat === "lake" || creature.habitat === "jungle" 
    })
    console.log(aquaticAnimals)

    // another example 
    const numerals = [1,2,3,4,5,6,7,8,9,]
    const value = numerals.find((numeral) => {
        return numeral > 4
    })

    console.log(value)

    //another example

    const states = [
        "Ogun State",
        "Kogi State",
        "Anambra State",
        "Lagos State",
        "Benue State",
    ]
    
    const state = states.find((state) => {
        return state.startsWith("L");
    })
    console.log(state);

    // a student assesment took place
    // with a total mark of 10, give us 
    // seven students and mark them over 10, 
    // now give a reward to each students with a
    // score over the mark of 6

    // const nurseryTwo= [
    //     {tagname:"tayo", score:"6"},
    //     {tagname:"bolu", score:"1"},
    //     {tagname:"jide", score:"5"},
    //     {tagname:"toyo", score:"9"},
    //     {tagname:"kessi", score:"7"},
    //     {tagname:"jimi", score:"4"},
    //     {tagname:"presh", score:"2"},


    // ]

    // const sabiStudents = nurseryTwo.filter
    // ((nursery) => {
    //    return nursery.score > 6
    // })

    // console.log(nurseryTwo)
    // console.log(sabiStudents)
    // sabiStudents.forEach((nursery) => {
    //     console.log(`Hi ${nursery}, Excellent and good of you, you scored above 6marks.`)
    //  })



const studentS = [
    {name: "Soliu", score: 4},
    {name: "Hayzed", score: 7},
    {name: "Kenny", score: 3},
    {name: "Eef", score: 8},
    {name: "Abdullahi", score: 2},
    {name: "Zainab", score: 5},
    {name: "Tunmise", score: 9},
]





const studentAboveFromSix = studentS.filter((student) => {
    if (student.score > 6 && student.score <= 10) {
        return student.score;
    }
    
})

// const rewardStudents = studentAboveFromSix.map((student) => {
//     return student.name;
// })

studentAboveFromSix.forEach((student) => {
    console.log(`Hi ${student.name}, here is your reward for scoring above 6`)
})

// array some and every 
const box = [1,2,3,4,5,6,7,]
// some checks if some of the properties in an Array
// meets a particular condition 
console.log(box.some((el) => {return el > 4}))

// eveery checks if all of the properties in an Array
// meets a particular condition 
console.log(box.every((el) => {return el > 4}))


//array reduce
// loops through the array and return the sum of the array. 
//it takes two properties: a callback function and an initial 
//value. the call back function take two parameters which are accululator and value .

const boxes= [1,2,3,4,5,6,7,8,9,10]
const answer = boxes.reduce((accumulator, value) => {
    return accumulator + value
},0)
console.log(answer)
