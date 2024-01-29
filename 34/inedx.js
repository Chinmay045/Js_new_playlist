// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {
//             resolve(src);
//         }
//         document.head.append(script);
//     })
// }

// const mai = async () => {
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
// }

// mai()

let weather = fetch('https://goweather.herokuapp.com/weather/bengaluru');
weather.then((value) => {
    return value.json();
}).then((val) => {
    console.log(val);
})