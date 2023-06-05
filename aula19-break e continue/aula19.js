//Break gera uma interrupção na execução, ele encerra o loop
//Continue quando é executado dentro de um loop para somente aquele interação e pula para a proxima interação

let n = 0
let max = 1000
let pares = 0

while(n < max) {
    console.log("CFB cursos - " + n)
    if(n == 5) {
        break //encerrou o loop
    }
    n++
}
console.log("fim do programa")

for(let i = 0 ; i < 1000 ; i++ ) {
    if(i%2!=0){
        continue //parou apenas essa interação e foi para a proxima , no caso pulou os números inpares
    }
    pares++
}
console.log("quantidade de pares: " + pares)
console.log("fim do programa")