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
    stp()
  }
  buttonForest.classList.remove('inactive')
  buttonRain.classList.remove('active')
  buttonRain.classList.add('inactive')
  buttonStore.classList.remove('active')
  buttonStore.classList.add('inactive')
  buttonFire.classList.remove('active')
  buttonFire.classList.add('inactive')
})

buttonRain.addEventListener('click', function () {
  let activate = buttonRain.classList.toggle('inactive')
  if (activate) {
    stp()
  } else {
    rain()
  }
  buttonRain.classList.add('active')
  buttonForest.classList.remove('active')
  buttonForest.classList.add('inactive')
  buttonStore.classList.remove('active')
  buttonStore.classList.add('inactive')
  buttonFire.classList.remove('active')
  buttonFire.classList.add('inactive')
})

buttonStore.addEventListener('click', function () {
  let activate = buttonStore.classList.toggle('active')
  if (activate) {
    coffee()
  } else {
    stp()
  }
  buttonStore.classList.remove('inactive')
  buttonForest.classList.remove('active')
  buttonForest.classList.add('inactive')
  buttonRain.classList.remove('active')
  buttonRain.classList.add('inactive')
  buttonFire.classList.remove('active')
  buttonFire.classList.add('inactive')
})

buttonFire.addEventListener('click', function () {
  let activate = buttonFire.classList.toggle('active')
  if (activate) {
    fire()
  } else {
    stp()
  }
  buttonFire.classList.remove('inactive')
  buttonStore.classList.remove('active')
  buttonStore.classList.add('inactive')
  buttonForest.classList.remove('active')
  buttonForest.classList.add('inactive')
  buttonRain.classList.remove('active')
  buttonRain.classList.add('inactive')
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
      return
    }

    if (seconds <= 0) {
      seconds = 2
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
})

buttonPause.addEventListener('click', function () {
  showHide()
  clearTimeout(timerOut)
})

buttonStop.addEventListener('click', function () {
  press()
  clearTimeout(timerOut)
  updateDisplay(minutes, 0)
  showHide()
})

buttonSum.addEventListener('click', function () {
  press()
  minutes = Number(minutesDisplay.textContent) + 5
  updateDisplay(minutes, 0)
})

buttonSub.addEventListener('click', function () {
  press()
  minutes = minutes - 5
  updateDisplay(minutes, 0)
})

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

function stp() {
  forestSound.pause()
  rainSound.pause()
  coffeeSound.pause()
  fireSound.pause()
}
