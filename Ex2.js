// Fonction classique
function somme(a, b) {
    return a + b;
}

// Fonction fléchée
const sommeArrow = (a, b) => {
    return a + b;
};

// Version avec return implicite
const sommeArrowShort = (a, b) => a + b;

console.log(somme(2, 3));       
console.log(sommeArrow(4, 6));   
console.log(sommeArrowShort(7, 8)); 
