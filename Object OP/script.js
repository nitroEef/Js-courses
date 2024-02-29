// calculating the rectangle area with function 

const rectangleArea = function(length, width) {
    return length * width;
};


const length = 12;
const width = 13;
const area = rectangleArea(length, width);
console.log("area is:", area);


//oop is a programming style bsed on classes and objects , in this case there are two 
//  things to know ,  data representing properties and the second is
// method representing action. it is developed to make code more flexible and easier to
// maintain

//object literal method
let person = {
    first_name : "Salman",
    last_name : "kofoshi",      //nineteen and twenty are properties as keys nd values

    getfunction : function() { //method is a property whose value is a function
        return `my name is ${person.first_name} ${person.last_name}`
    },
    phoneNumber : {
        mobile :"1233",
        landline : "62536"

    }
}
console.log(person.getfunction())
console.log(person.phoneNumber.landline)


//object constructor
function persontwo (first_name, last_name){
    this.first_name = first_name
    this.last_name = last_name}

    //THE NEW KEYWORD
// it creates a new empty object 
const student = {}
const studentTwo = new Object();

console.log(studentTwo)

// another exsmple 
const arr = [1,2,3];
const newArr = new Array (1,2,3)
console.log (arr, newArr)

//date
const mybirthday = new Date();
console.log(mybirthday)

const mynumber = new Number(134.77)
console.log(mynumber.toFixed(1))

//THIS keyword
// reference the object that is executing the current function  
//every function has a reference to its current execution context


function Sentence(words) { //constructor function syntax
    this.words = words;
    console.log(this)

}
const $_ = new Sentence (`hello there, we re learning bout this keyword`)


function Car(color, brand, wheels, id){
this.color = color ;
this.brand = brand;
this.wheels = wheels;
this.id = id;

console.log(this)
}
const blueCar = new Car("blue", "bmw", 4,)
const redCar = new Car("red", "lamborghini", 4,)


// create a cohort function with params(name,age,favfood,phone Number,baide), create
// a new instance for three different cohorts , log the param argument onto the console ;;
// baide should be a new date instance


function Cohorts(name, age, favfood, phoneNumber, baide){
    this.name = name;
    this.age = age;
    this.favfood = favfood;
    this.phoneNumber= phoneNumber;
    this.baide = baide;

console.log(this)
}

    const seniorCohorts = new Cohorts ( "eef", 24, "amala", 2342353, new Date("march 5, 2024"))
    const juniorCohorts = new Cohorts ( "karimui", 21, "poundo", 243223,  new Date("march 13,2014"))
    const averageCohorts = new Cohorts ( "tobi", 33, "rice",64735353,  new Date("march 1, 1654"))


// class 

// a class is a schemer that can save many many many values 
// 1. class declaration
// 2. class expression

class Shape1 {
    constructor(width, height){
        this.width = width;
        this.height = height;

        console.log(this)
    }

}
const Area = new Shape1 (10, 2);

//class expression
// anonymous 


class Shaped{
    constructor(width, height){
        this.width = width;
        this.height = height;

        console.log(this)
    }

}
const Area1 = new Shaped (10, 2);


// unanonymous 
const bigBoy = class Bigie {
    constructor (name, age){
        this.name = name;
        this.age= age;
    }
    // getter function
    get him () {
        return this.coder();
    }
    //method
    coder() {
        return {name: this.name , age: this.age}
    }
}
const instance = new bigBoy ("paiko", 44)
console.log(instance.him)


const School = class Academy {
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    get principal() {
        return this.seniorBoy()
    }

    seniorBoy() {
        return {name: this.name, location: this.location}
    }
}

const headMaster = new School ("Hayzed", "PEGAMUT");
console.log(headMaster.principal);

////
const RectShape = class Board{
    constructor(length , breadth){
        this.length = length;
        this.breadth = breadth;
    }
get calculator() {
    return this.areaCalculate()
}
areaCalculate() {
    return (this.length * this.breadth)
}
}

const bigCal  = new RectShape (22, 21)
console.log(bigCal.calculator)

// with an unanonymous class function named rectShape , create  a constructor
// with params of length and breadth , get the area of  rectangle  using getter
// function and calculate method , create a new instance for the rectShape with its relative argument
// answer to the console 