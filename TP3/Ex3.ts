// quest1
const a: number | string = 42;
console.log(a);

// quest2
type A = { name: string };
type B = { age: number };
type C = A & B;
const person: C = {
  name: "Alice",
  age: 25
};
console.log(person);

// quest3
type Status = "pending" | "done" | "canceled";
let currentStatus: Status = "pending";
currentStatus = "done";
console.log(currentStatus);

// quest4
let value: unknown = "Hello world";
if (typeof value === "string") {
  let length: number = value.length;
  console.log("Longueur :", length);
}
else {
  console.log("La valeur n'est pas une chaîne de caractères.");
}
