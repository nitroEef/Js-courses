  
  

// asignment operator

// let number = 5
// console.log(number)

// number += 5
// console.log(number)

// let word = 2
// console.log(word)

// word += ", i am  mr lateef"
// console.log(word)

let temperature = 25
if( temperature > 30) {
    console.log("it is a hot day")
}else{
    console.log ("it is not too hot today")
}

let hour = new Date().getHours();
if(hour < 12) {
    console.log("Good morning")
} else if (hour >= 12 && hour < 18){
    console.log("good afternoon")
}else{
    console.log("good evening")
}


let time = new Date().getHours();
if(time > 22) {
    console.log("lecture starts now")
} else if (time =1 ){
    console.log("second period")

} else if (time <17 ){
    console.log("BREAK period")
} else if (time = 12||13  ){
    console.log("HOUSE period")
}else{
    console.log("home everyone")
}



let score = 125;

if (score >= 90) {
    console.log("excellent you score an A")
}

else if (score >= 80) {
    console.log("excellent you score a b")
}

else if (score >= 70) {
    console.log("excellent you score a c")
}

else if (score >= 60) {
    console.log("excellent you score a D")
}
else{
    console.log("excellent you score a F")
}


// switch statement 
// let superHero = "captain America";

// switch (superHero) {
//     case'iron Man':
//     console.log("i am iron man")
//         break;
//     case 'thor':
//         console.log("that is my hammer")
//         break;
//     case 'captain America':
//         console.log ("never give up")
//         break;
//      case 'black widow':
//         console.log ("one short one kill")
//         break;
//     default:
//         console.log("enter a valid superHero username")

//         console.log(superHero)
// }

// let day = new date().getDate();
// let dayName;

// switch (day) {
//     case 0:
//         dayName = "sunday";
//         break;

//         case 1:
//             dayName = "Monday";
//             break;

//     case 2:
//         dayName = "tuesday";
//         break;

//     case 3:
//         dayName = "wednesday";
//             break;

//     case 4:
//         dayName = "thursday";
//             break;

//     case 5:
//         dayName = "friday";
//             break;

//     case 6:
//         dayName = "saturday";
//             break;
    
//     default:
//         dayName = "Unknown"
// }

// console.log("today is " + dayName);


// let fruits = pawpaw
// let bestfruit;

// switch(fruits) {
//     case 0 :
//         bestfruit = "orange";
//         break;

//     case 1 :
//         bestfruit = "watermelon";
//         break;

//     case 2:
//         bestfruit = "pawpaw";
//         break;

//     case 3 :
//         bestfruit = "banana";
//         break;

//         default:
//         bestfruit = unknown
// }

// console.log(bestfruit)


let fruit = "apple";
let message;

switch(fruit) {
    case "apple":
        message = "apple are crunchy and delicious";
        break;

        case "banana":
            message = "banana are sweet";
            break;

            case "orange":
        message = "orange are crunchy and delicious";
        break;

        case "grape":
        message = "grape is delicious";
        break;

        case "pie":
        message = "pie is crunchy and delicious";
        break;

        default:
            message = "sorry we are close"
}

console.log(message)



// ternary operator 

// const oldMan = 80

// if (oldMan >= 80){
//     console.log("you can drive")
// } else{
//     console.log("you may not drive")
// }

// oldMan >= 80 ? console.log("u can drive") : console.log("u may not drive")

// let age= 20

// let canVote = age >= 18 ? "yes you can vote" : "no. you can vote"
// console.log(canVote)
// let israining = "true"


//LOOP
let i = 0;
while(i < 10) {
    console.log(i)
    i++
}

