const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const fusion = [...arr1, ...arr2];

console.log(fusion);

const person = { name: "Ali", age: 25 };
const personCopy = { ...person, age: 30 };

console.log(person);     
console.log(personCopy); 
