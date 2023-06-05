function jogador(habilidade , fisico) {
    this.habilidade = habilidade
    this.fisico = fisico
    console.log(habilidade)
    console.log(fisico)
}
jogador(100 , 80)



function aluno(nome , nota){
    this.nome = nome //utilizando o this, não preciso criar uma váriavel com o nome diferente do parâmetro
    this.nota = nota

    this.dados_anonimo = function() {
        setTimeout(function(){       //o setTimeout gera um atraso na execução, chama a função após passar o tempo definido
            console.log(this.nome)   //o setTimeout sombreia o this
            console.log(this.nota)
    } , 1000  )

    this.dados_arrow = function() {
        setTimeout(() => {           //Tem que usar arrow function, por isso em cima deu undefined
            console.log(this.nome)
            console.log(this.nota)
        } , 2000 )
    }
}}

const aluno1 = new aluno("Pedro" ,100)
aluno1.dados_anonimo()
aluno1.dados_arrow()