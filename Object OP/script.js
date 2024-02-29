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
    // this.words = words;
    console.log(this)

}
const $_ = new Sentence (`hello there, we re learning bout this keyword`)