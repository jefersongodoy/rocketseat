import { finish } from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  hideShow,
  showHide,
  minutes,
  timerOut,
  buttonPlay,
  buttonPause,
  updateDisplay
}) {
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

  return {
    countDown,
    hideShow,
    showHide,
    timerEnd
  }
}
