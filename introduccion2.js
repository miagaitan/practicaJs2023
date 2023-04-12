/* const arr = [];
for (let i = 0; i < 10; i++) {
 //  arr[i] = i*3
   arr.push(i*3);
    console.log(i);
    
}
console.log(arr)

for (let i = 10; i >= 0; i--) {
   if (i%2===0) {
    console.log("El número " +i+ " es par");
   } else {
    console.log("Elnúmero " +i+ " es impar");
}
}
*/

// Objetos 
/* Clase 
    - template 

objeto - una instancia de una clase 

clase silla
    propiedades 
        - patas
        - posadera 
        - respaldar 
        -altura 

Objeto silla de casa 
    propiedades 
        - patas: 4 
        - posadera: madera 
        - respaldar: plastico 

*/
console.log("----------------------------------------------------------------")
const cubo6 = {
    caras: 6,
    colores: 6,
    nombre: "Rubik"
};

console.log(cubo6);
console.log(cubo6.nombre + " tiene " + cubo6.colores + " colores ");

const auto = {
    ruedas: 4,
    color: "Red",
    puertas: 4, 
    usable: true,
    armas: [
        "Pistola",
        "Minigun",
        "Misiles"
    ],
    conductor: {
        nombre: "Javier",
        edad: 11,

    }
};
console.log("Mis armas son: ")
auto.armas.forEach(element => console.log(element))