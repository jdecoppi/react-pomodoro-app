import StartBtn from "./StartBtn";
import PauseBtn from "./PauseBtn";
import RestartBtn from "./RestartBtn";
import SkipBtn from "./SkipBtn";

function ControlsContainer() {
//this component will hold the start/pause, restart, and skip buttons

    return <div>
        <StartBtn />
        <br />
        <br />
        <RestartBtn />
        <PauseBtn />
        <SkipBtn />
    </div>;
}

export default ControlsContainer;