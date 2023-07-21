function tratarErooELancar(erro) {
    throw new Error('Mensagem de Erro!!!')
}

function imprimerNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErooELancar(e)
    } finally {
        console.log('Fim!!!')
    }
}

const obj = {nome: 'Roberto'}
imprimerNomeGritado(obj)