var x = 1;   
let y = 2;   
const z = 3; 

{
    var x = 10;  // réécrit la variable globale
    let y = 20;  // nouvelle variable locale au bloc
    const z = 30; // nouvelle constante locale au bloc
    console.log("Dans le bloc:", x, y, z); 
}

console.log("Hors du bloc:", x, y, z);

const a = 100;

