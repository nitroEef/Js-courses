calculating 

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
it creates a new