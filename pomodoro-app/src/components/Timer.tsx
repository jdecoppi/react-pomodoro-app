interface Props {
    displayedString: string;
    decrementInterval: number;
}

// const 


function Timer(props: Props) {
    
    return (
        <div>
            {/*display time*/}
            <p className="timerValue">{props.displayedString}</p>
        </div>
    )
}

export default Timer;