//No while primeiro faz o teste lógico

//No do while primeira faz a execução

while (5 < 4) {
    console.log("não é executado porque o teste deu false")
}

do {
    console.log("nesse caso é executado, pois no do while é testado apenas depois da execução, aqui eu tenho a garantia de que o bloco de comando será executado ao menos uma vez")
} while(5 < 4)