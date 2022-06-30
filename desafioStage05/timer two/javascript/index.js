import { press, finish, forest, rain, coffee, fire } from './sounds.js'

// ----- VARIABLES -----

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sum')
const buttonSub = document.querySelector('.sub')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonStore = document.querySelector('.store')
const buttonFire = document.querySelector('.fire')
let minutes = Number(minutesDisplay.textContent)
const iconSun = document.querySelector('.iconDay')
const iconMoon = document.querySelector('.iconNight')
const body = document.querySelector('.body')
const buttonSoundOn = document.querySelector('.iconSoundOn')
const buttonSoundOff = document.querySelector('.iconSoundOff')
const inputForest = document.querySelector('.forest-volume')
const inputRain = document.querySelector('.rain-volume')
const inputStore = document.querySelector('.store-volume')
const inputFire = document.querySelector('.fire-volume')

// ----- BUTTONS CARDS -----

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

// ----- FUNCTIONS OF TIMER

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

function hideShow() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function showHide() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

// ----- BUTTONS CONTROLS OF TIMER -----

buttonPlay.addEventListener('click', function () {
  press()
  countDown()
  hideShow()
  buttonSum.setAttribute('disabled', 'disabled')
  buttonSub.setAttribute('disabled', 'disabled')
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
  press()
  if (minutes < 90) {
    minutes = Number(minutesDisplay.textContent) + 5
  } else if (minutes > 90) {
    minutes = 90
    buttonSum.setAttribute('disabled', 'disabled')
  }
  updateDisplay(minutes, 0)
})

buttonSub.addEventListener('click', function () {
  press()
  if (minutes > 0) {
    minutes = Number(minutesDisplay.textContent) - 5
  } else if (minutes < 0) {
    minutes = 0
    buttonSub.setAttribute('disabled', 'disabled')
  }
  updateDisplay(minutes, 0)
})

function enableControls() {
  buttonSum.removeAttribute('disabled', 'disabled')
  buttonSub.removeAttribute('disabled', 'disabled')
}

// ----- FUNCTIONS OF SOUND -----

// ----- FUNCTIONS OF DARKMODE -----

iconSun.addEventListener('click', function () {
  body.classList.add('darkMode')
  iconMoon.classList.remove('hide')
  iconSun.classList.add('hide')
  inputForest.classList.add('inputsDark')
  inputRain.classList.add('inputsDark')
  inputStore.classList.add('inputsDark')
  inputFire.classList.add('inputsDark')
})

iconMoon.addEventListener('click', function () {
  body.classList.remove('darkMode')
  iconMoon.classList.add('hide')
  iconSun.classList.remove('hide')
  inputForest.classList.remove('inputsDark')
  inputRain.classList.remove('inputsDark')
  inputStore.classList.remove('inputsDark')
  inputFire.classList.remove('inputsDark')
})
