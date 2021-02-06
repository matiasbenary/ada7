"use strict";
/*
var: escribia antes la letiables -  no usar
let: me permite escribir letiables simil let
const: me permite escribir letiables constantes
*/
let celular = 1122;
console.log("🚀 ~ file: app.js ~ line 8 ~ celular", celular);
celular = 2211;
console.log("🚀 ~ file: app.js ~ line 10 ~ celular", celular)
let producto = 15;
const IMPUESTOS = 1.25;
console.log(producto * IMPUESTOS);

/*
    Number
*/
let integer = 1;
let float = 1.25;
let notANumber = NaN;
let infinityNumber = Infinity;
let infinityNumberMinus = -Infinity;
let number = 10 + 10;
//info
let bigNumber = 9007199254740991;
console.log(Number.MAX_SAFE_INTEGER);
/*
    String
*/
let text = "hola";
let text1 = 'test';
let text2 = `mi numero es ${number}, que genial`;
let text3 = "mi numero es " + number + ", que genial";

/*
    Boolean
*/

let isOpen = false;
let hasText = true;

/*
    Array
*/
let listaDeCompras = ["pan", "manteca", false, number, [text, text1]];

/*
    Object
*/
let person = {
  name: "John",
  age: 13,
};

// letiables nullas
let test = null;
let test2 = undefined;
