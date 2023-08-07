const caixa = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(document.getRootNode()) //nó raiz
console.log(caixa.children)
console.log(caixa.firstChild)
console.log(caixa.lastChild)


console.log(caixa.children.length > 0 ? "Caixa geral possuí filhos" : "Caixa geral não possuí filhos")

if(btn_c[0].children.length > 0){
    console.log("HTML possuí filhos")
} else {
    console.log("HTML não possuí filhos")
}

console.log(caixa.children[1].innerHTML="Mudei aqui")