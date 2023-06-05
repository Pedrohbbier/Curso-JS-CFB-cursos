//Uma função geradora tem o seu retorno adiado, até o momento em que há necessidade do retorno
//Pode ir retornando coisas ao longo da execução do código
//O controle da função é da propria função

function *cores(){  //O asterísco faz ela ser geradora
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function *perguntas(){
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual seu esporte favorito'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Pedro').value)
console.log(itp.next('futebol').value)

function *contador() {
    let i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}
const ita = contador()
for(c of ita){
    console.log(c)
}