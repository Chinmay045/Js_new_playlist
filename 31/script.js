let promise = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log('it will resolve after 2')
        reject(new Error ("error occured"))
        // resolve(true);
    }, 2000)
})

console.log(promise)