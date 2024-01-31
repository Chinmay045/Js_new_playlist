let a = {
    name: "Chinmay",
    language: "javaScript"
}

console.log(a);

let p = {
    run: () => {
        alert('run');
    }
}
p.__proto_ = {
    name: "Jackie"
}

p.__proto_ = p