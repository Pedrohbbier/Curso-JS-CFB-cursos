/*
&& -> and e -->  true + true = true , true + false = false , false + false = false , todos tem que ser true para dar true
|| -> or ou --> true + true = true , true + false = true , false + false = false , um tem que ser true para dar true
! -> not não --> negação , inversão
*/

let n1,n2,n3,n4
n1=10
n2=5
n3=15
n4=2

console.log((n1>n2)&&(n1>n3))

console.log((n1>n2)||(n1>n3))

console.log(!((n1>n2)&&(n1>n3)))

console.log(!((n1>n2)||(n1>n3)))

if ((n1>n2)&&(n3>n4)) {
    console.log("verdadeiro")
}else{
    console.log("falso")
}