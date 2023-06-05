const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnTransferir = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click" , (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado") //toogle é como um add, mas pode tirar e colocar
    })
})

btnTransferir.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]//Dos que tem curso, escolha os que não(not) tem a classe selecionado
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)//axexar um filho, no caso el
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})