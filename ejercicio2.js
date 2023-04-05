// Ingresar tres valores e indicar cual es el mayor y cual el menor.
va = 42 
vb = 24
vc = 6
//opción con lógica 

if (va>vb && va>vc) {
    console.log("El número mayor es: " + va);
} else {
    if (vb>vc) { 
        console.log("El número mayor es: " + vb)
    } else {
        console.log("El número mayor es " + vc)
    }
}
if (va<vb && va<vc) {
    console.log("El número menor es: " + va);
} else {
    if (vb<vc) { 
        console.log("El número menor es: " + vb)
    } else {
        console.log("El número menor es " + vc) 
    }
}

