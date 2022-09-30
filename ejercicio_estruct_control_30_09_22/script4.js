//Quise hacer con potencia = potencia * 2 y no me sale

let i;
let base = 2;
let exponente = 20;
let limite = base ** exponente;

for (i = 0; i <= 20; i++) {
  let potencia = 1;

  if (potencia < limite) potencia = 2 ** i;
  console.log("2 elevado a " + i + " = " + potencia);
}
