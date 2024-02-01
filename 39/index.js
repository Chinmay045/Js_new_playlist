class Employee {
    login() {
        console.log('Employee has logged in');
    }

    logOut() {
        console.log('Employe has logged out');
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`);
    }

    requestLeaves(leaves) {
        super.requestLeaves(3)
        console.log('one extra is granted');
    }
}

// let e = new Employee();
let e = new Programmer();
e.login()
e.requestLeaves(3);
