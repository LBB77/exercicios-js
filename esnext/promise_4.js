function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}