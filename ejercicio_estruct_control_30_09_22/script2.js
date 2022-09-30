let numero1 = window.prompt("Introduce o primeiro numero:");
let numero2 = window.prompt("Introduce o segundo numero: ");
let numero3 = window.prompt("Introduce o terceiro numero:");

if (numero1 == numero2 || numero1 == numero2 || numero2 == numero3) {
  console.log("Os tres numeros son iguais");
} else if (numero1 < numero2 && numero1 < numero3) {
  console.log(numero1 + " é o menor número dos tres introducidos");
} else if (numero2 < numero1 && numero2 < numero3) {
  console.log(numero2 + " é o menor número dos tres introducidos");
} else {
  console.log(numero3 + " é o menor número dos tres introducidos");
}
