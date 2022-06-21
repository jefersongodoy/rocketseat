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

// ----- BUTTONS CARDS -----

buttonForest.addEventListener('click', function () {
  let activate = buttonForest.classList.toggle('active')
  if (activate) {
    forest()
  } else {
    stopSound()
  }
  buttonRain.classList.remove('active')
  buttonStore.classList.remove('active')
  buttonFire.classList.remove('active')
})

buttonRain.addEventListener('click', function () {
  let activate = buttonRain.classList.toggle('active')
  if (activate) {
    rain()
  } else {
    stopSound()
  }
  buttonForest.classList.remove('active')
  buttonStore.classList.remove('active')
  buttonFire.classList.remove('active')
})

buttonStore.addEventListener('click', function () {
  let activate = buttonStore.classList.toggle('active')
  if (activate) {
    coffee()
  } else {
    stopSound()
  }
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
  buttonFire.classList.remove('active')
})

buttonFire.addEventListener('click', function () {
  let activate = buttonFire.classList.toggle('active')
  if (activate) {
    fire()
  } else {
    stopSound()
  }
  buttonStore.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
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
