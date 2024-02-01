class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('Animal ' + this.name + ' is walking');
    }

    static capatilize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

let j = new Animal(Animal.capatilize('jack'));
j.walk();