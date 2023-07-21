// Fução sem retorno
function imprimirSoma(a, b) {
    console.log (a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)// falta paramento e resulta NaN
imprimirSoma(2, 10, 4, 5, 6, 7) // ignora o execesso de paramentros
imprimirSoma()

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())