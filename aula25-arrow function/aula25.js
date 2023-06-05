const soma = (v1 , v2) => {return v1 + v2}
console.log(soma(10,5))

const nome = n => { //Quando tem apenas um parâmetro, não precisa colocar os parênteses
    return n
}
console.log(nome("Pedro"))

const add = n => n+10 //se não usar return não precisa das chaves
console.log(add(10))

const ParOuInpar = n => {
    let res =  n%2 == 0 ? "Par" : "Inpar"
    return res
}
console.log(ParOuInpar(2))