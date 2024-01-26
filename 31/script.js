let promise = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log('it will resolve after 2')
        reject(new Error("error occured"))
        // resolve(true);
    }, 2000)
})


let promise1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log('it will resolve after 2')
        resolve(true)
        // resolve(true);
    }, 2000)
})
promise.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log('error occured' + err)
})
promise1.then((value) => {
    console.log(value)
})