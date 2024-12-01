import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "./components/Timer";
import ControlsContainer from "./components/ControlsContainer";

function App() {
  /*
     scratch notes:

     when restart is pressed:
         current phase and cycle stay the same
         timerState becomes 
         decrementInterval goes to 0ms
         timelineButton becomes Start
         timelineState becomes paused
         
     when skip is pressed:
         phase change: 
              work changes to break
                   timerState becomes breakTime
              break changes to work, and cycle increments by 1
                   timerState becomes workTime
         decrementInterval goes back to 0ms
         timelineButton becomes Start
         timelineState becomes paused
         
     when start is pressed:
          currentPhase and cycle stay the same
          timelineButton becomes Pause
          timelineState becomes running
          decrementInterval goes to 1000ms

     when pause is pressed:
          currentPhase and cycle stay the same
          timelineButton becomes Start
          timelineState becomes paused
          decrementInterval goes to 0ms      


     when timer hits 0, on next increment
          phase change: 
              work changes to break
                   timerState becomes breakTime
              break changes to work, and cycle increments by 1
                   timerState becomes workTime

     if cycle is 4, and increment is true
         setLongBreakReady(1)

    
         
     if longBreakReady is true
         timerState becomes longBreakTime
    

    */

  const [workTime, setWorkTime] = useState(25 * 60); //1500s
  const [breakTime, setBreakTime] = useState(5 * 60); //300s
  const [longBreakTime, setLongBreakTime] = useState(20 * 5); //1200s

  //4 cycles then long break timer (states of 1, 2, 3, 4)
  //each cycle is 25m work, 5m break
  //after each cycle, incremement, except when on cycle 4
  //on cycle 4, increment becomes toggling longBreakReady to 1
  const [currentCycle, setCurrentCycle] = useState(1);

  //is it time for the long break
  //triggers to 1 when cycle 4 is supposed to incremement
  const [longBreakReady, setLongBreakReady] = useState(false);

  //are we in work (25m - 1500s) or break (5m - 300s)
  const [currentPhase, setCurrentPhase] = useState("work");

  //default workstate is off
  const [timerState, setTimerState] = useState(0);

  const [timerAsString, setTimerAsString] = useState("25:00");

  //how fast is the timer going down - 1000ms
  const [decrementInterval, setDecrementInterval] = useState(1000);

  //default value is 1500 seconds, or 25 minutes
  const [timerValue, setTimerValue] = useState(1500);

  const [decrementing, setDecrementing] = useState(true);

  //every 1000ms or 0ms, calls function decrementTimer
  setInterval(decrementTimer, decrementInterval);

  function decrementTimer({ timerValue }: { timerValue: number }) {
    timerValue = parseInt(timerValue.toFixed());
    console.log(timerValue);
    setTimerValue(timerValue - 1);
    UpdateTimer(timerValue - 1);
  }

  function UpdateTimer(timerValue: number) {
    setTimerAsString((timerValue - 1).toString());
  }

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <Timer
        displayedString={timerAsString}
        decrementInterval={decrementInterval}
      />
      <ControlsContainer />
    </>
  );
}

export default App;
