
class person {
    constructor(
        public name: string,
        public age: number
    ) {}

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}


class Student extends person {
    constructor(
        name: string,
        age: number,
        public school: string
    ) {
        super(name, age);
    }

    study(): string {
        return `${this.name} is studying at ${this.school}.`;
    }
}


abstract class Shape {
    abstract area(): number;
}


class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

/**
 * Rectangle implementation of Shape.
 */
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

// Test cases

console.log("=== Testing person and Student ===");
const test = new person("Alice", 30);
console.log(test.greet());

const student = new Student("Bob", 20, "Tech University");
console.log(student.greet());
console.log(student.study());

console.log("\n=== Testing Shapes ===");
const circle = new Circle(5);
console.log("Circle area:", circle.area().toFixed(2));

const rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.area());
