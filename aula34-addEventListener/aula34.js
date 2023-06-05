function msg() {
    alert("clicou")
}

const c2 = [...document.getElementsByClassName("c2")]
c2.map((el)=>{
    el.addEventListener("click" , msg)
})

const c3 = [...document.getElementsByClassName("c3")]
c3.map((el)=>{
    el.addEventListener("click", ()=>{
        alert("clicou")
        el.style.color = "red"
        console.log(el.className + " foi clicado")
        el.classList.add("destaque")//destaque ta no css
    })
})

const c4 = document.querySelector("#c4")
c4.addEventListener('click' , ()=>{
    alert("clicou")
    c4.style.backgroundColor = 'black'
    c4.style.color = 'red'
})