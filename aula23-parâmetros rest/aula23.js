function soma(...valores){ //Parâmetros rest
    let tam = valores.length
    let res = 0
    for(let i = 0 ; i < tam ; i++){
        res+=valores[i] //res = res + valores 
    }
    return res
}
console.log(soma(10,5,2,15,8)) //Parâmetros rest

function mais(...numeros) {
    let res = 0
    for(var v of numeros) {
        res+=v
    }
    return res
}
console.log(mais(10,10,5))
