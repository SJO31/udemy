// class Person {

//     name = 'Sara';

//     constructor() {
//         this.age = 29;
//     }

//     greet() {
//         console.log(
//             `Hi, I am ${this.name} and I am ${this.age} years old.`
//         )
//     }
// }

function Person() {
    this.age = 30;
    this.name = 'John';
    this.greet = function() {
        console.log(
            `Hi, I am ${this.name} and I am ${this.age} years old.`
        );
    };
}

const p = new Person();
p.greet();