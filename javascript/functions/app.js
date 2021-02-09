"use strict";
/*

*/

// No ingresan datos,no retorna nada
const prepararCocina = () => {
    console.log("Preparando la cocina");
}
prepararCocina();

// Ingresan datos,no retorna nada
const mezclar = (primerIngrediente,segundoIngrediente) =>{
    console.log(`Estamos mezclando ${primerIngrediente} con ${segundoIngrediente}` );
}
mezclar("huevos","leche");

// No ingresan datos, retorna dato
const cocinarHorno = () =>{
    console.log("Se ingreso la mezcla al horno")
    return "Listo";
}
const estaListo = cocinarHorno();
console.log(estaListo);

// Ingresan datos, retorna dato
const limpiarCocina = (utensilios) => {
    const utensiliosLimpios = `Se limpiaron ${utensilios} `;
    return utensiliosLimpios;
}
const utensiliosLimpios = limpiarCocina("las cucharas");
console.log(utensiliosLimpios);

//Ahora todo junto
const preprarTorta = () => {
    prepararCocina();
    mezclar("harina","manteca");
    mezclar("huevo","leche");
    mezclar("harina-manteca","leche-huevo");
    const horno = cocinarHorno();
    console.log(horno);
    const espatulas = limpiarCocina("las espatulas");
    const cubiertos = limpiarCocina("los cubiertos");
    console.log(`${espatulas} y ${cubiertos}`);
}
console.log("-------------------------");
preprarTorta();


// const nombreFuncion = parametros
// parametros van a ser datos que voy a usar en mi función
// pueden ser 0 a infinitos
// van ser variables
// podemos retornar algo
// esto me permite seguir trabajando
const calcularImpuestos = (item) => {
    return item * 1.25
}
// como usar(invocar,llamar) una funcion
// habria que escribir el nobre de la funcion seguido de parentesis ej:calcularImpuestos()

/*
juguete 15
jugueteConImpuesto 18.75
const numero = prompt("ingrese un numero");
*/
const juguete = 15;
//Si la funcion retorna algo debo  guardarlo  en una variable
//Si tiene parametros deberia completarlos
const jugueteConImpuesto = calcularImpuestos(juguete);
const autitos = calcularImpuestos(34)
console.log(`sale el item ${juguete} y con impuesto ${jugueteConImpuesto},autito ${autitos}`);


/*
const calcularDescuento = (item) =>{
    return item - item * 0.1
}
const comprarItem = (item) =>{
    item = calcularDescuento(item);
    item = calcularImpuestos(item);
}

const item = Number(prompt("Ingrese el valor del item"));
const precioFinal = comprarItem(item);
console.log(`El precio final es de: ${precioFinal}`)
*/