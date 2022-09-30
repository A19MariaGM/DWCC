let numAAdivinar = Math.random(0, 100);

let oportunidades = 10;
let i;
for (i = 1; i <= oportunidades; i++) {
  let numeroIntroducido = window.prompt("Introduce un numero");

  if (numeroIntroducido < numAAdivinar) {
    console.log("O número introducido é menor que o numero a adiviñar");
  } else if (numeroIntroducido > numAAdivinar) {
    console.log("O número introducido é maior que o numero a adiviñar");
  } else {
    console.log("O número introducido é correcto");
    break;
  }
}
