let numero = window.prompt("Introduce un número:");
let suma = 0;

const elementos = new Array();
elementos.length = Number(numero);
for (let i = 0; i < elementos.length; i++) {
  elementos[i] = 1 + i;
  suma += elementos[i];
}
console.log(elementos);

console.log(suma);

let txt = "";
let i;
for (i in elementos) {
  txt += elementos[i];
}
console.log(elementos);

let txt2 = "";
let j;
for (i of elementos) {
  txt2 += elementos[j];
}
console.log(elementos);
