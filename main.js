// VARIÁVEIS DA APLICAÇÃO
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = Math.round(Math.random() * 10)
let tries = 1

// EVENTOS
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", getKey)

// FUNÇÕES
function handleTryClick(e) {
  e.preventDefault()

  if (inputNumber.value == "") {
    alert(`Você deve inserir obrigatoriamente um número válido!`)
  } else {
    if (inputNumber.value < 0 || inputNumber.value > 10) {
      alert(`Número inválido. Atenção à regra!`)
    } else {
      if (Number(inputNumber.value) == randomNumber) {
        toogleScreen()
        screen2.querySelector(
          "h2"
        ).innerText = `Você acertou em ${tries} tentativas.`
      }
    }

    inputNumber.value = ""
    tries++
  }
}

function handleResetClick() {
  toogleScreen()
  tries = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}

function getKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
