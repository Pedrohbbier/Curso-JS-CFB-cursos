//Operador spread, quebra (espalha) um array
const jogador1 = {nome:"Bruno" , energia:100 , vidas:3 , magia:150 }
const jogador2 = {nome:"Bruce" , energia:100 , vidas:3 , velocidade:80 }
const jogador3 = {...jogador1,...jogador2} //Spread
console.log(jogador3)

const soma=(v1,v2,v3) => {
    return v1 + v2 + v3
}
let valores=[1,5,4,13]
console.log(soma(valores))
console.log(soma(...valores))
console.log(soma(5,5,5))