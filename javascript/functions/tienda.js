"use strict";

// Funcion: va ser un fracmento de codigo que realice una tarea
// entre parentesis van parametros, son valores que va usar mi funcion
/*const saludar = () =>{
   console.log("Hola"); 
}

saludar();
let me permite re asignar,cambiar valor
const no me permite re asignar

let nombre = "Pepe";
nombre = "fulanito"

const nombre = "Carlas";
nombre = "Flavia" --> Me va a dar error
let variables
const funciones

Nombre descriptivos y cortos
EJ: addCard, getUser
tiene una sola cosa y la tiene que hacer bien
*/
/*
let nombre = prompt("ingrese su nombre"),
 apellido = prompt("ingrese su apellido");

const saludar = (name,surname) => {
    return (`Hola ${name} ${surname}, bienvenida a Ada`);
}

let lider = "Lider";
let liderAp = "Batman";

let textoAlert = saludar(nombre,apellido);
alert(textoAlert);


let textoConsola = saludar("Pepe","Argento");
console.log(textoConsola);
textoConsola = saludar(lider,liderAp);
console.log(textoConsola);

*/
const libros = 100;
const pizarra = 120;
const revista = 50;
/*
Se tienen 3 productos a la venta con su precio, se necesita que el usuario vea el precio con impuesto en consola
el impuesto es de un 20%
*/
/*
Por razones desconocidas el impuesto subio a 30%.Actualizar el codigo para un mejor funcionamiento
*/
/*
Se viene un hotsale hay que ademas de los impuesto agregar un descuento del 10%
*/
/*
El cliente 80% de los clientes no ven los precios por la consola,ahora tambien se tiene que ver por un alert
*/
// sin funciones
const IMPUESTO = 1.3;
const DESCUENTO = 0.9; 
console.log(`El producto sale ${(libros * DESCUENTO) * IMPUESTO }`);
alert(`El producto sale ${(libros * DESCUENTO) * IMPUESTO }`);
console.log(`El producto sale ${(pizarra * DESCUENTO) * IMPUESTO}`);
alert(`El producto sale ${(pizarra * DESCUENTO) * IMPUESTO}`);
console.log(`El producto sale ${(revista * DESCUENTO) * IMPUESTO}`);
alert(`El producto sale ${(revista * DESCUENTO) * IMPUESTO}`)

// con funciones
const imprimirPrecio = (item,nombre) => {
   /* let itemConImpuestos = calcularImpuestos(item);
    console.log(`El producto sale ${itemConImpuestos}`)*/
    let mensajePrecioFinal = `El producto ${nombre} sale ${(item * DESCUENTO) * IMPUESTO}`
    console.log(mensajePrecioFinal);
    alert(mensajePrecioFinal);
}

imprimirPrecio(libros,"libros");
imprimirPrecio(pizarra,"pizarra");
imprimirPrecio(revista,"revista");