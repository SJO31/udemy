class AgedPerson {
    printAge() {
        console.log(this.age)
    }
}

class Person extends AgedPerson {

    name = 'Sara';

    constructor() {
        super();
        this.age = 29;
    }

    greet() {
        console.log(
            `Hi, I am ${this.name} and I am ${this.age} years old.`
        )
    }
}

// function Person() {
//     this.age = 30;
//     this.name = 'John';
//     this.greet = function() {
//         console.log(
//             `Hi, I am ${this.name} and I am ${this.age} years old.`
//         );
//     };
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age)
//     }
// }

const p = new Person();
p.greet();
console.log(p)
console.log(p.__proto__)