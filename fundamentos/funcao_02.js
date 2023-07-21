//Armazenar função dentro de uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenar uma função arrow em um variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))