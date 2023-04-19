function nombre (){
    const pepe = 5;

}

function esMayor(valor1, valor2){
    if(valor1 > valor2){
        return true;
    } else {
        return false;
    }
}

//pepe NO EXISTE

const nombreFuncion = () => {     
}
const esMenor = (valor1, valor2) => {
    if (valor1 < valor2){
        return true;
    } 
    return false;
}

const esMenoroIgual = (valor1, valor2) => {
    return valor1 <= valor2;

}
const esMenorOIgual = (valor1, valor2) => valor1 <= valor2;

const numeros= [20, 50, 25, 3]
for (let i = 0; i < numeros.length; i++) {
    console.log("Es "+ numeros[i] + " mayor ", esMayor(numeros[i], 5)) 
    
}

const Persona = {
    Nombre: "Nombre",
    Sexo: "Hombre",
    Edad: 0
}

// personas
const personas = [
    {
        Nombre: "Mia",
        Sexo: "Mujer",
        Edad: 20,
    },
    {
        Nombre: "Zacarias",
        Sexo: "Hombre",
        Edad: 21,
    },
    {
        Nombre: "Rebecca",
        Sexo: "Mujer",
        Edad: 19,
    },
    {
        Nombre: "Raul",
        Sexo: "Hombre",
        Edad: 74,
    },
    {
        Nombre: "Pepe",
        Sexo: "Hombre",
        Edad: 99,
    },
]; 

const esMujer = (obj) => obj.Sexo === "Mujer";
const esHombre = (obj) => obj.Sexo === "Hombre";

const filtrarPor = (arr, comparador) => arr.filter(a => comparador(a));

console.log(filtrarPor(personas, esMujer));
console.log(filtrarPor(personas, esHombre));