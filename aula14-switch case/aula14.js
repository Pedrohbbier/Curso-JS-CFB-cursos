let colocacao = 1

switch(colocacao) {
    case 1: //caso seja 1
        console.log("Primeiro Lugar")
        break //necessário usar break ao final do bloco
    case 2: //caso seja 2
        console.log("Segundo lugar")
        break
    case 3: //caso seja 3
        console.log("Terceiro lugar")
        break
    case 4: case 5: case 6: //caso seja 4 ou 5 ou 6
        console.log("Foi mais ou menos")
        break
    default : //caso não seja nenhum
        console.log("Não foi tão bem")
        break
}