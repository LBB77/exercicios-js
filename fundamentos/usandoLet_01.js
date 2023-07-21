let numero = 1
{
    let numero = 2// let só tem escopo dentro do bloco, não interfere fora do bloco.
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)