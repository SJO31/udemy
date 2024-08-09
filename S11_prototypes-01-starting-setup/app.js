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
        this.greet3 = function () { console.log('hello') }
    }

    greet2 = function () {
        console.log('Hi');
    }

    // the least memory heavy method. it uses the same prototype for every object and not added to every object itself
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

// const p = new Person();
// p.greet();
// console.log(p)
// console.log(p.__proto__)

const course = {
    title: 'Wood work',
    rating: 4
}

Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
})

course.printRating();
console.log(course);