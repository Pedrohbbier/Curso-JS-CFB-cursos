//Não são específicos
//querySelector retorna o primeira elemento que encontrar da chave que foi especificada.
//querySelectorAll retorna a coleção com todos os elementos que encontrar.
const query_div = document.querySelector("div")//Vai retornar a primeira div
query_div.style.color = 'red'

const queryAll_p = [...document.querySelectorAll('p')]//Vai retornar todos os p

for(v of queryAll_p){
    v.style.color = 'blue'
}

queryAll_p.map((el)=>{
    el.style.backgroundColor = 'red'
})