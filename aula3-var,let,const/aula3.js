"use strict"

function teste() {
    let nome = "Pedro"
    if(true){
        console.log("Dentro do IF do teste: " + nome)
    }
    console.log("Dentro de teste: " + nome)
}

teste()

//var : Pode ser acessada de qualquer escopo.
//let : Apenas pode ser acessada pelo mesmo escopo ou por um escopo acima daquele que foi declarado.

let nomea = "Pedro"
nomea = "Legal"
console.log(nomea)

var nomeb = "Pedro"
nomeb = "Legal"
console.log(nomeb)

const nomec = "Pedro"
// nomec = "Legal"
// console.log(nomec)       Não funciona, pois uma const não pode ter seu valor alterado.