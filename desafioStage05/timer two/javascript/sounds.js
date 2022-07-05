const forestSound = new Audio('./sounds/Floresta.wav')
const storeSound = new Audio('./sounds/Cafeteria.wav')
const rainSound = new Audio('./sounds/Chuva.wav')
const fireSound = new Audio('./sounds/Lareira.wav')
const buttonPress = new Audio('./sounds/button-press.wav')
const kichenTimer = new Audio('./sounds/kichen-timer.mp3')

forestSound.loop = true
storeSound.loop = true
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

export {
  press,
  finish,
  forest,
  rain,
  coffee,
  fire,
  stopSound,
  forestSound,
  rainSound,
  storeSound,
  fireSound
}
