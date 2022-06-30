forestSound = new Audio('../sounds/Floresta.wav')
storeSound = new Audio('../sounds/Cafeteria.wav')
rainSound = new Audio('../sounds/Chuva.wav')
fireSound = new Audio('../sounds/Lareira.wav')
buttonPress = new Audio('../sounds/button-press.wav')
kichenTimer = new Audio('../sounds/kichen-timer.mp3')

forestSound.loop = true
storeSound.loop = true
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
  inputForest.classList.remove('active')
  inputRain.classList.remove('active')
  inputStore.classList.remove('active')
  inputFire.classList.remove('active')
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
  storeSound.pause()
  rainSound.pause()
  fireSound.pause()
}

function rain() {
  rainSound.play()
  storeSound.pause()
  forestSound.pause()
  fireSound.pause()
}

function coffee() {
  storeSound.play()
  forestSound.pause()
  rainSound.pause()
  fireSound.pause()
}

function fire() {
  fireSound.play()
  storeSound.pause()
  forestSound.pause()
  rainSound.pause()
}

function stopSound() {
  forestSound.pause()
  rainSound.pause()
  storeSound.pause()
  fireSound.pause()
}

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

export { press, finish, forest, rain, coffee, fire }
