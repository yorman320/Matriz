
function crearMatriz(n) {
    let matriz = [];

    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = parseInt(prompt(`Ingresa el valor para la posición [${i}][${j}]`));

        }
    }

    return matriz;
}
let n = parseInt(prompt("ingrese la longitud de las matrices:"));
let matriz1=crearMatriz(n)
let matriz2=crearMatriz(n)
console.log(matriz1)
console.log(matriz2)

function sumarMatriz(matriz1, matriz2) {
    let resultado =[];
    for (let i = 0; i < matriz1.length; i++) {
        let fila = []
        for (let j = 0; j < matriz1[i].length; j++) {
            
            fila.push(matriz1[i][j]+ matriz2[i][j])
        }
        resultado.push(fila)
    }
    return resultado

}
let sumar = sumarMatriz(matriz1, matriz2);
console.log(sumar)
