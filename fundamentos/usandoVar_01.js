{{{{ var sera = 'Será???'}}}}
console.log(sera)

//var fora de function aparece na aplicação inteira.

function teste() {
    var local = 123
    console.log(local)
    //var dentro de function, só aparece dentre da function.
}

teste()
console.log(local)