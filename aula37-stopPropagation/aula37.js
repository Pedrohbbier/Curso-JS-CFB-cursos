const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const btn_c2 = document.querySelector("#c2")
const btn_c3 = document.querySelector("#c3")
const btns = [btn_c1 , btn_c2 , btn_c3]

caixa1.addEventListener("click" , (evt)=>{
    console.log(evt.target) //diz quem disparou o evento
    caixa1.style.backgroundColor = "blue"
})

btns.map((el)=>{
    el.addEventListener("click" , (evt)=>{
        evt.stopPropagation(evt) //Os três primeiros botões não aciona o evento da caixa 1
    })
})