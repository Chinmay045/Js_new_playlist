async function weather() {
    let bngWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('23 Deg');
        }, 1000)
    })

    let delhiWewather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("45 Deg")
        }, 3000);
    })

    let bng = await bngWeather;
    let del = await delhiWewather;
    return [bng, del];

    // return[bngWeather,delhiWewather]
}

let a = weather();
console.log(a)