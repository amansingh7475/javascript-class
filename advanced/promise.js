// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async task is completed");
//         resolve()
//     },1000)
// }) 

// promiseOne.then(()=>{
//     console.log("promise consumed");
    
// })

// variable leke bhi sakte hai or bina liye bhi kar sakte hai .

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("promise consumed");
    
// })

// -----------------------------------------------------------\\

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username: "aman" , email : "amanrajput8456@gmail.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
    
// })

// -------------------------------------------------------------\\

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username: "Aman" , password : "12345"})
//         }else{
//             reject("Error : something wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);  
// }).finally(()=> console.log("The promise is either resolved or reject"))



// -------------------dono method hai jo acha lage uper wala aur nuche wala same hi hai bs method alag alag hai-------------\\

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: "Rajput" , password : "12345"})
        }else{
            reject("Error : something wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
       console.log(error);
        
    }
}

consumePromiseFive()

// ----------------------------------------------

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))
