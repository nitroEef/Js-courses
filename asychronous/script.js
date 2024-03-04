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
    setTimeout(() =>   console.log("function two") 
    , 2000);
}
functionOne()


// const fetchUser = (usernamee) => {
//         user:"lateef",
//     username:"eef";
//     setTimeout(() =>   console.log("fe") 
//     , 2000);

// }

const fetchUser = (username) => {
    setTimeout(() => {
        return{user:username}
        
    }, 2000);
}

// const user = fetchUser('test');
// console.log(user)


// const fetchUserOne = (name,callback) => {
//     setTimeout(() => {
        
//         console.log("now we have the user");
//         callback({user:name})
//     }, 2000);
    
//   };

//   const user2 = fetchUserOne("EEf", (user2) => {
//     console.log(user2)
// })
  

  
//CALL BACK HELL


// const fetchUserTwo = (username, callback) => {
//     setTimeout(() => {
//         console.log("Now we have the user");
//         callback({username});
//     },2000);
// }

// const fetchUserPhotos =(username, callback) => {
//     setTimeout(() => {
//         console.log(`Now we have the photo details ${username}`)
//         callback(["photo1", "photo2"])
//     }, 2000);
// }

// const fetchUserPhotosDetails = (photos, callback) => {
//     setTimeout(() => {
//         console.log(`Now we have the photos details ${photos}`);
//         callback("details")
//     }, 2000);
// }

// const user3 = fetchUserTwo("Micheal", (user) => {
//     console.log(`Your name is: ${user.username}`);
//     fetchUserPhotos(user.username, (userphotos) => {
//         console.log(`Your photos are: ${userphotos}`);
//         fetchUserPhotosDetails(userphotos[0], (details) => {
//             console.log(`Your photo details are ${details}`)
//         })
//     })
// })
// this is called back hell. it becomes unreadable
// const user4 = fetchUserTwo("Micheal", (user) => {
//     fetchUserPhotos(user.username, (userPhotos) => {
//         fetchUserPhotosDetails(userPhotos[0], (details) => {
//             fetchUserPhotosDetails(userPhotos[0], (details) => {
//                 fetchUserPhotosDetails(userPhotos[0],(details) => {
//                     fetchUserPhotosDetails(userPhotos[0], (details) => {
//                         console.log(details);
//                     })
//                 })
//             })
//         })
//     })
// })


// promise 
// promise are object that either return a successful fetched data or error 



    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("now we are in promise");
            // reject("user not found")
            resolve({username:"Bode"})
        },5000);
    })

        promise
        .then((user) => console.log(user.username))
        .catch((error) => console.log(error))


        const fetchUsser = (username) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("we are using promise")
                    resolve(username)
                }, timeout);
            },4000)
        }


        const fetchUsser1 = (photo) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("we have the photos")
                    resolve("photos", "photos2")
                }, timeout);
            },4000)
        }

        const fetchUserPhotosDetails= (photo) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("now we have the photos details")
                    resolve("details")
                }, timeout);
            },4000)
        }

        fetchUser("zainab")
        .then((user) => fetchUserPhotos(user))
        .then((photos) => fetchUserPhotos(photos[0]))
        .then((details) => console.log(details))
