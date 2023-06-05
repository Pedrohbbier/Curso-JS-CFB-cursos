let num = [10,20,30,40,50]

console.log("for:")

for(let i = 0 ; i<num.length ; i++) { //length é a quantidade de elementos que tenho dentro de num
    console.log(num[i])
}

console.log("for in:")//Crio uma variável, que vai receber os elementos retornados da coleção que eu quero trabalhar

for(n in num) { //retorna as propriedades(posições)
    console.log(n)
}
for(a in num) {
    console.log(num[a])
}

console.log("for of:")//

for(n of num){ //retora os valores(elementos)
    console.log(n)
}