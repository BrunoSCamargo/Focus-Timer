import {
  buttonPlay,
  buttonPause,
  buttonStoped,
  buttonSet,
  buttoSoundOn,
  buttoSoundOf
} from "./elements.js"

export default function({controls,timer,sound}) {

buttonPlay.addEventListener('click', () =>{
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', () =>{
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStoped.addEventListener('click', () =>{
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttoSoundOn.addEventListener('click', () =>{
  buttoSoundOn.classList.add('hide')
  buttoSoundOf.classList.remove('hide')
  sound.bgAudio.pause()
})

buttoSoundOf.addEventListener('click', () =>{
  buttoSoundOf.classList.add('hide')
  buttoSoundOn.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})}