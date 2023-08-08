const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos=["HTML" , "CSS" , "Javascript" , "PHP" , "React" , "MySQL"]

cursos.map((el , chave )=>{
    const novoElemento = document.createElement("div") //cria um novo elemento
    novoElemento.setAttribute("class" , "curso c1" ) //add uma class ao novoElemento
    novoElemento.setAttribute("id","c"+chave) //add um id do c0 ao c6
    novoElemento.innerHTML = (el)
    caixa1.appendChild(novoElemento)
    const btnLixeira = document.createElement("img")
    btnLixeira.setAttribute("src" , "./lixeira.png")
    novoElemento.appendChild(btnLixeira)
    btnLixeira.setAttribute("class" , "btnLixeira")
    btnLixeira.addEventListener("click", ()=>{
        caixa1.removeChild(novoElemento)
    })
})