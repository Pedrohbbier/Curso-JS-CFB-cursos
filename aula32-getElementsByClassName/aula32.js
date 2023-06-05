//Retorna uma coleção
const cursosTodos = [...document.getElementsByClassName("curso")]

for(v of cursosTodos) {
    v.style.color = "orange"
}

cursosTodos.map((v)=>{
    v.style.textDecoration = 'underline';
})

const cursosC1 = [...document.getElementsByClassName("c1")]

cursosC1.map((v)=>{
    v.style.fontSize = '3em'
    v.style.width = '600px'
    v.style.justifyContent = "right"
})

const cursosC2 = [...document.getElementsByClassName("c2")]

cursosC2.map((el)=>{
    el.classList.add("destaque") //c2 segue o .destaque que está no css
})

const cursoEspecial = document.getElementsByClassName("curso")[0] //Posição 1

cursoEspecial.style.color = "blue"