//EcmaScript - ES6 Modules

//default import
import resetControls from './controls.js'

// named import
import { Timer } from './timer.js'
//Event-driven = evento direcionado

//progamação imperativa = dando ordens

//callback = chamada com retorno

/*
REFATORAÇÃO - mudar o código para deixa-lo mais entendível, mais performático SEM ALTERAR suas funcionalidades.
*/

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

// ijeção de dependências
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.resetTimer()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?')

  if (!newMinutes) {
    timer.resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
