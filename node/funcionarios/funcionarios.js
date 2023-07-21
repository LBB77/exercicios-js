const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(function(p) {
        return p.pais == 'China' && p.genero == 'F'
    })
    .reduce(menorSalario))
})

