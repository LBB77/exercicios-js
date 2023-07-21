let valor // não inicializada
console.log(valor)//undefined
valor = null //ausência de valor
console.log(valor)//null

const produto = {}
console.log(produto.preco)//undefined

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)