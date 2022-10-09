//García Mirás, María del Pilar

/*Crea unha función que sume todos os valores pasados como parámetros, sendo
estes un número indeterminado.*/



function sumaParamPasadosCantidIndeterm(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
    total += arg;
    } return total;
}
    
console.log(sumaParamPasadosCantidIndeterm(3, 4, 5, 6, 7, 8, 9, 10));