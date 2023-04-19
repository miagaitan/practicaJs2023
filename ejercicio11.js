// Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. 
//Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.

// Persona
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

// promedio de edades 
let sumaEdades= 0;
let promedioEdades= 0;
const cantidadPersonas = personas.length;
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].Nombre + " tiene " +personas[i].Edad + " años")
    sumaEdades = sumaEdades + personas[i].Edad;
}
promedioEdades = sumaEdades/cantidadPersonas

console.log("El promedio de las edades es de: " + promedioEdades);

// nombre de la mujer con mayor edad 
let MujerMayor; 
console.log("mujerMayor" + MujerMayor);
for (let i = 0; i < personas.length; i++) {
   const p = personas[i];
    if (p.Sexo === "Mujer"){
        if (!MujerMayor) { 
            MujerMayor = p; 

        } else {
            if (p.Edad > MujerMayor.Edad) {
                MujerMayor = p;
            }
        } 
    }
    
}
console.log(MujerMayor);

const mujeres = personas.filter( p => p.Sexo === "Mujer" );
console.log(mujeres);
let mujerMayor2 = {edad: 0};
for (let i = 0; i < mujeres.length; i++) {
    if (mujeres[i].Edad > mujerMayor2.edad){
        mujerMayor2 = mujeres[i];
    }
    
} 
console.log(mujerMayor2);

