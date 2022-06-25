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
const bodyAll = document.querySelector('.bodyAll')
const buttonSoundOn = document.querySelector('.iconSoundOn')
const buttonSoundOff = document.querySelector('.iconSoundOff')

// ----- BUTTONS CARDS -----

buttonForest.addEventListener('click', function () {
  buttonForest.classList.add('active')
  buttonRain.classList.remove('active')
  buttonStore.classList.remove('active')
  buttonFire.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  forest()
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('active')
  buttonForest.classList.remove('active')
  buttonStore.classList.remove('active')
  buttonFire.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  rain()
})

buttonStore.addEventListener('click', function () {
  buttonStore.classList.add('active')
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
  buttonFire.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  coffee()
})

buttonFire.addEventListener('click', function () {
  buttonFire.classList.add('active')
  buttonStore.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  fire()
})

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

forestSound = new Audio('./sounds/Floresta.wav')
coffeeSound = new Audio('./sounds/Cafeteria.wav')
rainSound = new Audio('./sounds/Chuva.wav')
fireSound = new Audio('./sounds/Lareira.wav')
buttonPress = new Audio('./sounds/button-press.wav')
kichenTimer = new Audio('./sounds/kichen-timer.mp3')

forestSound.loop = true
coffeeSound.loop = true
rainSound.loop = true
fireSound.loop = true

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
  stopSound()
})

function press() {
  buttonPress.play()
}

function finish() {
  kichenTimer.play()
}

function forest() {
  forestSound.play()
  coffeeSound.pause()
  rainSound.pause()
  fireSound.pause()
}

function rain() {
  rainSound.play()
  coffeeSound.pause()
  forestSound.pause()
  fireSound.pause()
}

function coffee() {
  coffeeSound.play()
  forestSound.pause()
  rainSound.pause()
  fireSound.pause()
}

function fire() {
  fireSound.play()
  coffeeSound.pause()
  forestSound.pause()
  rainSound.pause()
}

function stopSound() {
  forestSound.pause()
  rainSound.pause()
  coffeeSound.pause()
  fireSound.pause()
}

// ----- FUNCTIONS OF DARKMODE -----

iconSun.addEventListener('click', function () {
  bodyAll.classList.add('darkMode')
  iconMoon.classList.remove('hide')
  iconSun.classList.add('hide')
  buttonForest.classList.add('cardDark')
  buttonRain.classList.add('cardDark')
  buttonStore.classList.add('cardDark')
  buttonFire.classList.add('cardDark')
  buttonPlay.classList.add('buttonDakr')
  buttonPause.classList.add('buttonDakr')
  buttonStop.classList.add('buttonDakr')
  buttonSum.classList.add('buttonDakr')
  buttonSub.classList.add('buttonDakr')
  buttonSoundOn.classList.add('buttonDakr')
  buttonSoundOff.classList.add('buttonDakr')
})

iconMoon.addEventListener('click', function () {
  bodyAll.classList.remove('darkMode')
  iconMoon.classList.add('hide')
  iconSun.classList.remove('hide')
  buttonForest.classList.remove('cardDark')
  buttonRain.classList.remove('cardDark')
  buttonStore.classList.remove('cardDark')
  buttonFire.classList.remove('cardDark')
  buttonPlay.classList.remove('buttonDakr')
  buttonPause.classList.remove('buttonDakr')
  buttonStop.classList.remove('buttonDakr')
  buttonSum.classList.remove('buttonDakr')
  buttonSub.classList.remove('buttonDakr')
  buttonSoundOn.classList.remove('buttonDakr')
  buttonSoundOff.classList.remove('buttonDakr')
})
