const dc1 = document.getElementById("c1")
dc1.innerHTML = 'Mudei o texto aqui'
dc1.style.color = 'red'
dc1.style.fontSize = '5em'
dc1.style.textAlign = 'center'


const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

const arrayElementos = [dc2 ,dc3 ,dc4 , dc5 ,dc6]

for(d of arrayElementos) {     //Tem esse método com for e o método map abaixo
    d.style.backgroundColor = 'orange'
    d.style.padding = "20px"
}

arrayElementos.map((e)=>{
    e.style.color = 'blue'
    e.style.textAlign = 'center'
    e.style.fontSize = '1.5em'
    e.style.fontFamily = 'Courier'
})