// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolved after 2 seconds')
//         resolve(56);
//     }, 2000)
// })

// p1.then((value) => {
//     // console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         resolve('promise 2');
//     })
//     return p2;
// }).then((value) => {
//     console.log(value)
//     // console.log('we are done');
// })

// p1.then(()=>{
//     console.log('part 2')
// })

let promise = Promise.resolve(5);
console.log(promise)