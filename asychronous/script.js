//when we are talking aabout asy, we are talking about setinterval() and settimeout()
//method dey with parenthesis
// interval allow u to execute a chunk of codes
//  everytime a specified amount of milliseconds passes

// settimeout functions allow u to wait a certain amount
//  of time before a executing a chunk of codes, do note other codes outside of timeout will 
//  continue execution as normal 

//we used clearInterval() to clear

// const interval = setInterval(() => console.log("hello world"), 1000);
// clearInterval(interval);


const myInterval = setTimeout(() => console.log("hello world"), 1000);


// // SYCHRONOUS JAVASCRIPT 
// it is one in which the code is executed line by line and their tasks are completed instantly
// which means there is no time delay in comletetion of the tasks for those lines of codes 

//invoking a function, carrying a functionname to the up function, will be inside the function
// call a function will be outside the close bracket 


const functionOne = () => {
      console.log("function one");


      functionTwo();
      console.log("function one,part2");

    
}


const functionTwo = () => {
    console.log("function two");

}
functionOne()
