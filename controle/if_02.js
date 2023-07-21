function teste1(num) {
    if(num > 7)
    console.log(num)//só executa a primeira senteça se não estiver um bloco
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {//; termina a senteça e nesse caso a torna vazia
        console.log(num)
    }
}

teste2(6)
teste2(8)