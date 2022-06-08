import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet
})

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({ controls, timer, sound })
