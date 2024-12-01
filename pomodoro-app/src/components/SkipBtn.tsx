function SkipBtn() {
/*
    when skip is pressed:
         phase change: 
              work changes to break
                   timerState becomes breakTime
              break changes to work, and cycle increments by 1
                   timerState becomes workTime
         decrementInterval goes back to 0ms
         timelineButton becomes Start
         timelineState becomes paused */


    const SkipCurrentPhase = () => {

    }

    //this button will increment the current phase by 1
    //two phases per cycle: work and break. 4 cycles before longbreak. after longbreak, reset to 0.

    return <button onClick={SkipCurrentPhase}>Skip</button>;
}

export default SkipBtn;