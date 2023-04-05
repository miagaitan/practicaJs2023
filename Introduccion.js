const numero = 314;
let numeroVariable = 5;
numeroVariable = 15;
numeroVariable = 15+5;
console.log(numero);
console.log (numeroVariable);





const a = 3;
const b = 10;
const c = a + b;

console.log("Suma de const = " + c);




let va = 15;
let vb = 20;
let vc = va + vb;
console.log("Suma de let = " + vc);
vc = vc + 100;
console.log("Suma vc = " + vc);
vc++;
console.log ("vc = " + vc);
vc--;
console.log ("vc = "+ vc);

console.log("-------------")
console.log(1+1);
console.log(1+"1");
console.log ("1"+"1");
console.log ("1"+1);
console.log("-------------")
/*
nuevaVariable = 100;
otraVariable = 200; 

sumaVariables = nuevaVariable + otraVariable; 

console.log("suma de variables = " + sumaVariables); */

const arr = [10, 20, 30, 40, 50]; // posiciones 5: arranca en 0 
/* 
aaaaaaaaaaaaaaaaaaa
*/ 
console.log("----------------")
console.log (arr)
console.log (arr[2]);
console.log (arr[2]+100);

arr[2] = arr[2] + 100;
console.log ("array modificado " + arr);

console.log("----------------")

// + - * / ^ ** 

console.log("dos al cubo " + Math.pow(2,3));

/*
>=
<= 
<
>
== igualdad no restricctiva (no utilizar)
no utlizar el var 
!= desigual
!== desigual
=== significa la igual propiamente dicha */
console.log("hola" === "ola");
console.log("ola" === "ola");
console.log (2>3);
console.log ("comparando number y string " + (2 == "2"));
console.log ("comparando number y string " + (2 === "2"));
console.log ("comparando number y string " + (2 > "2"));

console.log("----------------")
// Condicionales 
if (2===2) {
    console.log("son iguales");
}
if (va === 5) {
    console.log("Son iguales");
} else {
    console.log(va + " y 5 son diferentes");
}