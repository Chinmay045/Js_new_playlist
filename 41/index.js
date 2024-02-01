class Animal {
    constructor(name) {
        this._name = name;
    }
    fly() {
        alert('I am flying');
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        return this._name;
    }
}

let a = new Animal('bruno');
a.fly()
let c = 56;
console.log(a.name)
console.log(a._name = 'jackie')
console.log(a instanceof Animal)
console.log(c instanceof Animal)