/*Vai inteirar elementos de um array e permite que eu realize uma filtragem,
me retorna somente determinados elementos do array*/

const idades = [15,21,30,17,18,44,12,50]
const maior = idades.filter((valor , indice , array)=>{ //O filter passa o valor, indice e array
    if(valor >= 18){
        return valor
    }
})
const menor = idades.filter((val)=>{
    if(val < 18){
        return val
    }
})

console.log(idades)
console.log(maior)
console.log(menor)