let el = document.getElementsByTagName("div")
el = [...el] //É necessário fazer isso quando estamos usando com o DOM
el.map((e,i)=>{
    e.innerHTML = "CFB cursos"//Alterou o elemento do DOM, antes era os cursos , agora é CFB cursos
})
console.log(el)