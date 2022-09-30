let numero = window.prompt("Introduce un numero");

/*
for (i = numero; i > 1; i--) {
  factorial = factorial * i;
}*/
let factorial = 1;
let i;
for (i = 1; i <= numero; i++) {
  factorial = factorial * i;
}

console.log("El factorial de " + numero + " es " + factorial);
