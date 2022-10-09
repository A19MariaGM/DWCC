//García Mirás, María del Pilar

/*Crea unha función á que se lle pasen varios números como parámetros (un número
indeterminado de parámetros). Debe devolver a media dos números pasados. Proba
a realizala con diferentes bucles for (con contador, for…in e for…of).*/


function mediaOf(...theArgs) {
    let media = 0;
    let suma = 0;
    let cantidad = 0;
    for (const arg of theArgs) {
        cantidad = cantidad + 1;
    }

    for (const arg of theArgs) {
      suma += arg;
    }
    media = suma / cantidad;
    return media;
}

console.log(mediaOf(1, 2, 3, 4, 5, 6));

//NO me sale:
function mediaContador(...theArgs) {
    let media = 0;
    let suma = 0;
    let cantidad = theArgs.length;
    for (let i = 0; i <= cantidad; i++) {
        
        suma += theArgs[i];
    }
    media = suma / cantidad;
    return media;
}

console.log(mediaContador(1, 2, 3, 4, 5, 6));

//Me falta mediaIn