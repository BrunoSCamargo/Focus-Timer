import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Event from "./config.js"
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStoped,
  minutesDisplay,
  secondsDisplay, 
} from "./elements.js"


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStoped
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Event({controls, timer, sound})