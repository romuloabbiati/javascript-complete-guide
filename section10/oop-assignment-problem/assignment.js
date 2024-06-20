class Course {
    #price;

    set price(value) {
        if (value < 0) {
            throw 'Invalid value!';
        }
        this.#price = value;
    }

    get getPrice() {
        return `\$${this.#price}`;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calc() {
        return this.length / this.#price;
    }

    courseSummary() {
        return `${this.title} has a duration of ${this.length} months and 
        price of ${this.getPrice} pounds.`;
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        console.log('JS theoretical course.');
    }
}

const jsCourse = new Course('Javascript', 6, 200);
console.log(jsCourse);
console.log('length/price: ', jsCourse.calc());
console.log(jsCourse.courseSummary());
console.log(' ---------------------- ');
const javaCourse = new Course('Java', 6, 220);
console.log(javaCourse);
console.log('length/price: ', javaCourse.calc().toFixed(2));
console.log(javaCourse.courseSummary());
console.log(' ---------------------- ');
const jsPracticalCourse = new PracticalCourse('JavaScript Practical Course', 8, 150, 300);
console.log(jsPracticalCourse);
console.log('length/price: ', jsPracticalCourse.calc());
console.log(jsPracticalCourse.courseSummary());
console.log(' ---------------------- ');
const jsTheoreticalCourse = new TheoreticalCourse('JavaScript Theoretical Course', 4, 50, 50);
console.log(jsTheoreticalCourse);
console.log('length/price: ', jsTheoreticalCourse.calc());
console.log(jsTheoreticalCourse.courseSummary());