function ParOuInpar() {
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if(res%2==0) {
        return "Par" //eu não posso executar mais de um return em uma function
    }else{
        return "Inpar"
    }
}

console.log(ParOuInpar())

let num = ParOuInpar()

console.log(num)