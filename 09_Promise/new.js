const promiseOne = new Promise((resolve, reject)=>{
    // Do any async task
    // DB Call, Cryptography, network
    setTimeout(function(){
        // 
        console.log("Promise.....");
        resolve();
    },2000)
})


promiseOne.then(()=>{
    console.log("Resolve is then");
    
})