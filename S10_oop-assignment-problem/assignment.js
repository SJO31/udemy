class Course {
    #price;

    get price() {
        return '$' + this.#price;
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid value!';
        }
        this.#price = value;
    }

    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    calcCostPerMinute() {
        const pricePerMinute = this.#price / this.length;
        console.log(`$ per Minute: ${pricePerMinute.toFixed(2)}`)
    }

    outputSummary () {
        const summary = `
        Title: ${this.title}
        Length: ${this.length} Minutes
        Price: \$${this.#price}
        `
        console.log(summary)
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, num) {
        super(title, length, price);
        this.numOfExercises = num;
    }

}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        console.log('Print something...')
    }

}

const courseOne = new Course('Morning Routine', 10, 29.99);
const courseTwo = new Course('Fit Today', 30, 49.99);
console.log(courseOne);
console.log(courseTwo);

courseOne.calcCostPerMinute();
courseTwo.calcCostPerMinute();

courseOne.outputSummary();
courseTwo.outputSummary();

const practicalCourseOne = new PracticalCourse('Karate', 60, 39.99, 4);
console.log(practicalCourseOne);
const theoreticalCourseOne = new TheoreticalCourse('Physic', 45, 19.99);
console.log(theoreticalCourseOne)
theoreticalCourseOne.publish();