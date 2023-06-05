//Tem a funcionalidade de percorrer arrays
//Vai ser usado quando precisar trabalhar com elemento de elemento de uma coleção
//diferente dos loops tradicionas como for , while entre outros, o map vai inteirar toda a coleção, não tem a opção de parar no meio
//Vou utilizar quando precisar operar por completo os elementos de uma coleção

const cursos = ['HTML' , 'CSS' , 'Javascript' , 'PHP' ,'React']
cursos.map((el , i) => {
    console.log("Curso:" + el + " - Posição do curso:" + i)
})
//primeiro parâmetro indica o elemento que ele está inteirando, e o segundo é o indíce, ou seja a posição do elemento dentro da coleção

const  pessoas = ["Pedro" , "Bruno" , "João" , "Izabela" , "Clara"]
let p = pessoas.map((es , po) => {
    console.log(es)
    return po
})
console.log(p)