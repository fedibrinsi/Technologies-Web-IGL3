const notes = [12, 5, 17, 9, 20];

// 1. Moyenne avec reduce
const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
console.log("Moyenne:", moyenne); 

// 2. Tri décroissant
const notesTriees = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant:", notesTriees); 

// 3. Filtrer les notes ≥ 10
const notesFiltrees = notes.filter(note => note >= 10);
console.log("Notes ≥ 10:", notesFiltrees);
