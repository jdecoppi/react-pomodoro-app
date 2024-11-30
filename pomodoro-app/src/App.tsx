import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import ControlsContainer from './components/ControlsContainer'

function App() {

  return (
    <>
    <h1>Pomodoro Timer</h1>
      <Timer />
      <ControlsContainer />
    </>
  )
}

export default App
