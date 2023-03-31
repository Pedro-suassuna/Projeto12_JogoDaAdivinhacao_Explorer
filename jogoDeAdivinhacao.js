let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10!")
let tries = 1
const randomNumber = Math.round(Math.random() * 10)

while(Number(result) != randomNumber){
    result = prompt("Erro! Tente outro número:")
    tries++
}

alert(`Parabéns, você adivinhou em ${tries} tentativas`)