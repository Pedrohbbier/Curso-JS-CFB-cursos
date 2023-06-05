function soma(n1 , n2) {
    console.log(n1 + n2 )
}
soma(10,5) //valor 10 entra em n1 , valor 5 entra em n2

function soma2(n1 = 10 , n2 = 10 ){ //Se não passar nemhum parâmetro esses serão os valores padrões
    console.log(n1+n2)
}
soma2()

function soma3(n1=0 , n2=0) {
    let res
    res = n1 + n2
    return res
}
console.log(soma3(10,10))

function nome(p1) {
    console.log(p1)
}
nome("Pedro")

let valor = 0
console.log(valor)
function add(v) {
    return valor+v
}
valor = add(10)
console.log(valor)
valor = add(5)
console.log(valor)