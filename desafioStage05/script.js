const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sum')
const buttonSub = document.querySelector('.sub')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonStore = document.querySelector('.store')
const buttonFire = document.querySelector('.fire')
let minutes = Number(minutesDisplay.textContent)

buttonForest.addEventListener('click', function () {
  buttonForest.classList.remove('inactive')
  buttonForest.classList.add('active')
  buttonRain.classList.remove('active')
  buttonRain.classList.add('inactive')
  buttonStore.classList.remove('active')
  buttonStore.classList.add('inactive')
  buttonFire.classList.remove('active')
  buttonFire.classList.add('inactive')
  forest()
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.remove('inactive')
  buttonRain.classList.add('active')
  buttonForest.classList.remove('active')
  buttonForest.classList.add('inactive')
  buttonStore.classList.remove('active')
  buttonStore.classList.add('inactive')
  buttonFire.classList.remove('active')
  buttonFire.classList.add('inactive')
  rain()
})

buttonStore.addEventListener('click', function () {
  buttonStore.classList.remove('inactive')
  buttonStore.classList.add('active')
  buttonForest.classList.remove('active')
  buttonForest.classList.add('inactive')
  buttonRain.classList.remove('active')
  buttonRain.classList.add('inactive')
  buttonFire.classList.remove('active')
  buttonFire.classList.add('inactive')
  coffee()
})

buttonFire.addEventListener('click', function () {
  buttonFire.classList.remove('inactive')
  buttonFire.classList.add('active')
  buttonStore.classList.remove('active')
  buttonStore.classList.add('inactive')
  buttonForest.classList.remove('active')
  buttonForest.classList.add('inactive')
  buttonRain.classList.remove('active')
  buttonRain.classList.add('inactive')
  fire()
})

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
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  press()
  countDown()
})

buttonStop.addEventListener('click', function () {
  press()
  clearTimeout(timerOut)
  updateDisplay(minutes, 0)
})

buttonSum.addEventListener('click', function () {
  press()
  ++minutes
  updateDisplay(minutes, 0)
})

buttonSub.addEventListener('click', function () {
  press()
  --minutes
  updateDisplay(minutes, 0)
})

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
