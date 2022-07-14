import { press } from './sounds.js'

export default function Controls({
  buttonSub,
  buttonSum,
  minutes,
  minutesDisplay,
  updateDisplay
}) {
  function play() {
    buttonSum.setAttribute('disabled', 'disabled')
    buttonSub.setAttribute('disabled', 'disabled')
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

  return {
    play,
    sum,
    sub,
    enableControl
  }
}
