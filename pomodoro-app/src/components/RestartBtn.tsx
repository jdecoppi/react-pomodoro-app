function RestartBtn() {
  /*
    when restart is pressed:
         current phase and cycle stay the same
         timerState becomes 
         decrementInterval goes to 0ms
         timelineButton becomes Start
         timelineState becomes paused
         */

  //this component will toggle the state of timeLeft to 0
  const RestartCurrentPhase = () => {};

  return <button onClick={RestartCurrentPhase}>Restart</button>;
  
}

export default RestartBtn;
