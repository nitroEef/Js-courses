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
};

const functionTwo = () => {
  setTimeout(() => console.log("function two"), 2000);
};
functionOne();

// const fetchUser = (usernamee) => {
//         user:"lateef",
//     username:"eef";
//     setTimeout(() =>   console.log("fe")
//     , 2000);

// }

// const fetchUser = (username) => {
//     setTimeout(() => {
//         return{user:username}

//     }, 2000);
// }

// const user = fetchUser('test');
// console.log(user)

const fetchUserOne = (name, callback) => {
  setTimeout(() => {
    console.log("now we have the user");
    callback({ user: name });
  }, 2000);
};

const user2 = fetchUserOne("EEf", (user2) => {
  console.log(user2);
});

//CALL BACK HELL

const fetchUserTwo = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the user");
    callback({ username });
  }, 2000);
};

// const fetchUserPhotos = (username, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have the photo details ${username}`);
//     callback(["photo1", "photo2"]);
//   }, 2000);
// };

// const fetchUserPhotosDetails = (photos, callback) => {
//     setTimeout(() => {
//         console.log(`Now we have the photos details ${photos}`);
//         callback("details")
//     }, 2000);
// }

// const user3 = fetchUserTwo("Micheal", (user) => {
//   console.log(`Your name is: ${user.username}`);
//   fetchUserPhotos(user.username, (userphotos) => {
//     console.log(`Your photos are: ${userphotos}`);
//     fetchUserPhotosDetails(userphotos[0], (details) => {
//       console.log(`Your photo details are ${details}`);
//     });
//   });
// });
// this is called back hell. it becomes unreadable
// const user4 = fetchUserTwo("Micheal", (user) => {
//   fetchUserPhotos(user.username, (userPhotos) => {
//     fetchUserPhotosDetails(userPhotos[0], (details) => {
//       fetchUserPhotosDetails(userPhotos[0], (details) => {
//         fetchUserPhotosDetails(userPhotos[0], (details) => {
//           fetchUserPhotosDetails(userPhotos[0], (details) => {
//             console.log(details);
//           });
//         });
//       });
//     });
//   });
// });

// promise
// promise are object that either return a successful fetched data or error

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("now we are in promise");
    // reject("user not found")
    resolve({ username: "Bode" });
  }, 5000);
});

promise
  .then((user) => console.log(user.username))
  .catch((error) => console.log(error));

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we are using promise");
      resolve(username);
    }, 4000);
  });
};

const fetchUserPhotos = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we have the photos");
      resolve("photos", "photos2");
    }, 4000);
  });
};

const fetchUserPhotosDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the photos details");
      resolve("details");
    }, 4000);
  });
};

fetchUser("zainab")
  .then((user) => fetchUserPhotos(user))
  .then((photo) => fetchUserPhotos(photo[0]))
  .then((details) => console.log(details));


  //then for true
  //catch for false


// async and await 
  // async always return promise when the retrun statement is used , 
  // it becomes resolved value pf the promise

  // const displayData = async () => {
  //   const user = await fetchUser('Soliu');
  //   const userPhotos = await fetchUserPhotos();
  //   const userEmail = await fetchMail ();

  //   console.log(user)
  // }

  // const myUsers = {
  //   userList :[]
  // }


  const myUSers = {
    userList: []
}

const myFoolFunc = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const fetchJson = await response.json();
//    console.log(fetchJson);
}

const anotherFn = async () => {
    const data = await myFoolFunc();
    myUSers.userList = data;
    console.log(myUSers.userList);

}

anotherFn()
// console.log(myUSers.userList);

// example 2
const getAllUsersEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
 //    console.log(fetchJson);

    const email = fetchJson.map((user) => {
        return user.email;
    })
    console.log(email)
 }

getAllUsersEmails();

const getAllUsersNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
 //    console.log(fetchJson);

    const oyee = fetchJson.map((joy) => {
        return joy.username;
    })
    console.log(oyee);
 }

 getAllUsersNames();

// //  try and catch 
// try block contain the code that u want to attempt 
// if an error occur within this block , js will stop executing,
//  the try block will now jump to the catch block''
//  the catch block, is a place where you can handle the error , when an error occur,
//   it will jump to the Catch..
//    finally block is optional , always 
//   run either there is a error or Not, kogbonkankan

const getData = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    return data

   } catch(error){
    console.log('error:', error.message)
   }
}
getData()
.then((data) => console.log("data:",data)).catch((error) =>console.log("error:error.message"));



const fetchDataWithError = async () => {
  try{
    console.log("fetching Data")
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')

    if (!res.okay){
      throw new error("failed to fetch data")
    }
    const $data = await  res.json();
    return $data

  }catch (error) {
    console.log('error:',error.message)
  }
}

fetchDataWithError()
.then(result => {
  if (result) {
    console.log("data", result)
  }
})


//thins happening to gether in the order they aarecset up is sychronized


// single details 


const fetchSingleData = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok) {
      throw new Error('Not found will fixed soon')
    }
    const [userData] = await response.json() // assuming data is an array of user
    const {username, email, name} = userData;
    return {username, email, name};

  }catch (error) {
    console.log('Error:', error.message)
  }
}
fetchSingleData().then(({username,email,name}) => {
  console.log('Username:', username)
  console.log('Email:', email)
  console.log('Name:', name)
})


// example 

const fData = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok) {
      throw new Error('Not found will fixed soon')
    }
    const [userData] = await response.json() // assuming data is an array of user
    const {username, email, name} = userData;
    return {username, email, name};

  }catch (error) {
    console.log('Error:', error.message)
  }
}
fData().then(({username,email,name}) => {
  console.log('Username:', username)
  console.log('Email:', email)
  console.log('Name:', name)
})

// classwork 

const fetchedData = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok) {
      throw new Error('Not found will fixed soon')
    }
    const userData = await response.json()
    const mappedData = userData.map(({username, email, name}) => {
      return {username,name, email}
    }) 
    console.log(mappedData)
  } catch (error) {
    console.log("eerror:", error.message)}
  }
  fetchedData()


// const data = await response.json();
// const mappedData = data.map(
//   ({id, username, email, name, address, phone,website, company}) => ({
//     id,
//     username,
//     email,
//     name,
//     address:{
//       street : address. street,
//     },
//     phone,
//     website,
//     company : {
//       name :company.name
//     }

//   })
// )
// console.log(mappedData)
// } catch (error) {
//   console.log("error:", error.message);

// }
// };
// fetchNestData


const fetchNestDta = async () => {

  try{
      console.log("username")
 const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
  
  if(!response.ok){
      throw new Error("Not found will fixed soon")
  }
  const userData = await response.json() 
  const mappedData = userData.map(({ id, username,email, name,address, phone, website, company}) =>({
  id, username, email, name, address: {
      street: address.street,
  },
  phone, website, company: {
      name: company.name
  }
      
}));
console.log(mappedData)
  }catch (error){
      console.log("error:",error.message)
}   
}
  fetchNestDta()




// mathematical method 
// it allows you  to perform matheatical task on numbers

const roundNub = Math.round(4.4);
console.log(roundNub)

const ceil = Math.ceil(4.4);
console.log(ceil)

const floor = Math.floor(4.5);
console.log(floor)

const sign = Math.sign(4.4);
console.log(sign)

const power = Math.pow(6,5);
console.log(power)

const square = Math.sqrt(64);
console.log(square)


const absolute = Math.abs(-64);
console.log(absolute)