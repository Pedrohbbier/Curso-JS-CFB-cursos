const caixa1 = document.querySelector("#caixa1")
const btn_cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener ('click' , (evento)=>{
    alert("clicou")
    alert(evento.target) //quem disparou o evento
})

btn_cursos.map((el)=>{
    el.addEventListener ('click' , (evt)=>{ 
        evt.stopPropagation() //Agora os elementos filhos da div não aciona o evento do elemento pai
    })
})