let num = 10
let num2 = 50

// Teste lógico ? se verdadeiro : se falso

//0 = false
//1,2,3,4,5...... = true
let res = (!(num%2) ? "par" : "inpar") //operador ternário, true = par , false = inpar
console.log(res)

let res2 = ((num > num2) ? "true" : "false")
console.log(res2)

let res3 = ((num < num2) ? "true" : "false")
console.log(res3)

function Res4() {  //Um operador ternário é tipo isso
    if(num < num2){
        console.log("true")
    } else {
        console.log(false)
    }
}
Res4()