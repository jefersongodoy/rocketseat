import {
  press,
  forest,
  rain,
  coffee,
  fire,
  stopSound,
  forestSound,
  rainSound,
  storeSound,
  fireSound,
  finish
} from './sounds.js'

/* VARIABLES */
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sum')
const buttonSub = document.querySelector('.sub')

const iconSun = document.querySelector('.iconDay')
const iconMoon = document.querySelector('.iconNight')
const body = document.querySelector('.body')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonStore = document.querySelector('.store')
const buttonFire = document.querySelector('.fire')
const buttonSoundOn = document.querySelector('.iconSoundOn')
const buttonSoundOff = document.querySelector('.iconSoundOff')
const inputForest = document.querySelector('.forest-volume')
const inputRain = document.querySelector('.rain-volume')
const inputStore = document.querySelector('.store-volume')
const inputFire = document.querySelector('.fire-volume')
let timerOut

/* EVENTS */
buttonForest.addEventListener('click', function () {
  buttonForest.classList.add('active')
  buttonRain.classList.remove('active')
  buttonStore.classList.remove('active')
  buttonFire.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  inputForest.classList.add('active')
  inputRain.classList.remove('active')
  inputStore.classList.remove('active')
  inputFire.classList.remove('active')
  forest()
  resetInput()
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('active')
  buttonForest.classList.remove('active')
  buttonStore.classList.remove('active')
  buttonFire.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  inputRain.classList.add('active')
  inputForest.classList.remove('active')
  inputStore.classList.remove('active')
  inputFire.classList.remove('active')
  rain()
  resetInput()
})

buttonStore.addEventListener('click', function () {
  buttonStore.classList.add('active')
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
  buttonFire.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  inputStore.classList.add('active')
  inputRain.classList.remove('active')
  inputForest.classList.remove('active')
  inputFire.classList.remove('active')
  coffee()
  resetInput()
})

buttonFire.addEventListener('click', function () {
  buttonFire.classList.add('active')
  buttonStore.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  inputFire.classList.add('active')
  inputRain.classList.remove('active')
  inputStore.classList.remove('active')
  inputForest.classList.remove('active')
  fire()
  resetInput()
})

iconMoon.addEventListener('click', function () {
  body.classList.add('darkMode')
  iconSun.classList.remove('hide')
  iconMoon.classList.add('hide')
  inputForest.classList.add('inputsDark')
  inputRain.classList.add('inputsDark')
  inputStore.classList.add('inputsDark')
  inputFire.classList.add('inputsDark')
})

iconSun.addEventListener('click', function () {
  body.classList.remove('darkMode')
  iconSun.classList.add('hide')
  iconMoon.classList.remove('hide')
  inputForest.classList.remove('inputsDark')
  inputRain.classList.remove('inputsDark')
  inputStore.classList.remove('inputsDark')
  inputFire.classList.remove('inputsDark')
})

buttonPlay.addEventListener('click', function () {
  press()
  countDown()
  hideShow()
  play()
})

buttonPause.addEventListener('click', function () {
  showHide()
  clearTimeout(timerOut)
  enableControls()
})

buttonStop.addEventListener('click', function () {
  press()
  clearTimeout(timerOut)
  updateDisplay(minutes, 0)
  showHide()
  enableControls()
})

buttonSum.addEventListener('click', function () {
  sum()
})

buttonSub.addEventListener('click', function () {
  sub()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')
  buttonForest.classList.remove('active')
  buttonForest.classList.remove('activeDark')
  buttonRain.classList.remove('active')
  buttonRain.classList.remove('activeDark')
  buttonStore.classList.remove('active')
  buttonStore.classList.remove('activeDark')
  buttonFire.classList.remove('active')
  buttonFire.classList.remove('activeDark')
  inputForest.classList.remove('active')
  inputRain.classList.remove('active')
  inputStore.classList.remove('active')
  inputFire.classList.remove('active')
  stopSound()
})

inputForest.addEventListener('change', function () {
  forestSound.volume = this.value
})

inputRain.addEventListener('change', function () {
  rainSound.volume = this.value
})

inputStore.addEventListener('change', function () {
  storeSound.volume = this.value
})

inputFire.addEventListener('change', function () {
  fireSound.volume = this.value
})

/* CONTROLS */
function enableControls() {
  enableControl()
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function timerEnd() {
  updateDisplay(minutes, 0)
}

function countDown() {
  timerOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      finish()
      timerEnd()
      showHide()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}

function sum() {
  press()
  if (minutes < 90) {
    minutes = Number(minutesDisplay.textContent) + 5
  } else if (minutes > 90) {
    minutes = 90
    buttonSum.setAttribute('disabled', 'disabled')
  }
  updateDisplay(minutes, 0)
}

function sub() {
  press()
  if (minutes > 0) {
    minutes = Number(minutesDisplay.textContent) - 5
  } else if (minutes < 0) {
    minutes = 5
    buttonSub.setAttribute('disabled', 'disabled')
  }
  updateDisplay(minutes, 0)
}

function enableControl() {
  buttonSum.removeAttribute('disabled', 'disabled')
  buttonSub.removeAttribute('disabled', 'disabled')
}

function hideShow() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function showHide() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function play() {
  buttonSum.setAttribute('disabled', 'disabled')
  buttonSub.setAttribute('disabled', 'disabled')
}

function resetInput() {
  forestSound.volume = 0.5
  inputForest.value = 0.5
  rainSound.volume = 0.5
  inputRain.value = 0.5
  storeSound.volume = 0.5
  inputStore.value = 0.5
  fireSound.volume = 0.5
  inputFire.value = 0.5
}
