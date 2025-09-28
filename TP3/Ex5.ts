function add(x: number, y: number): number {
  return x + y;
}

function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  return `Hello, ${name}!`;
}

function power(base: number, exp: number=2): number {
    return Math.pow(base, exp);
}

function combine(input1: number | string, input2: number | string): number | string {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

console.log(add(5, 10));
console.log(greet("Alice", 30));
console.log(greet("Bob"));
console.log(power(3));
console.log(power(2, 3));
console.log(combine(5, 10));
console.log(combine("Hello, ", "world!"));
console.log(combine("The answer is ", 42));

