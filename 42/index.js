// class Complex {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary
//     }
// }

// let a = new Complex(2,4);

class Human {
    constructor(name, favfood) {
        this.name = name;
        this.favfood = favfood;
    }

    walk() {
        console.log(this.name + 'human is walking')
    }
}

class student extends Human {

    walk() {
        console.log(this.name + ' Student is walking')
    }
}

let o = new student('chinmay');
o.walk();
console.log(o instanceof Human)