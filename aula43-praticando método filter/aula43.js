const cursos = ["HTML", "CSS" , "Javascript", "PHP" , 'React' , 'MySQL' , 'ReactNative']
cursos.map((el) =>{
    const caixa2 = document.querySelector("#caixa2")
    const elementosCurso = document.createElement("div")
    caixa2.appendChild(elementosCurso)
    elementosCurso.innerHTML = (el)
    const btn = document.createElement("input")
    btn.setAttribute("type","radio")
    elementosCurso.appendChild(btn)
    elementosCurso.setAttribute("class" , "textBox")
    btn.setAttribute("class","btnBox")
}
)

const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
btnCursoSelecionado.addEventListener("click" , ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    console.log(todosRadios)
})