let f = function(v1,v2){
    return v1 + v2
}
console.log(f(10,5))

const b = function(...valores){
    let res = 0
    for (v of valores){
        res+=v
    }
    return res
}
console.log(b(10,5,10,5))

const a = new Function("v1","v2","return v1 + v2") //Função construtor anônima
console.log(a(20,3))