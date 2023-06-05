let colecaoHTML = document.getElementsByTagName("div")//Retorna uma coleção

for (v of colecaoHTML){ //Podemos fazer assim, ou usar a forma de baixo
    v.style.color = "blue"
    v.style.textAlign = "center"
}

colecaoHTML = [...colecaoHTML]
colecaoHTML.map((el)=>{
    el.style.backgroundColor = 'red'
})