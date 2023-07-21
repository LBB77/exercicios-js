function triangulo(a, b, c) {
    if(a == b && b == c) {
        console.log('Equilatero')
    } else 
    if((a == b && b!= c) || (a != b && b == c) || (a == c && c != b)) {
        console.log('Isósoles')
    } else 
    console.log('Escaleno')
}

triangulo(2, 2, 2)
triangulo(1, 2, 2)
triangulo(1, 2, 3)