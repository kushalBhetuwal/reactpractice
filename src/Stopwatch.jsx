import {useRef, useState} from 'react';
const Stopwatch =()=>{
   const[startTime, setStartTime] = useState(null);
   const[now,setNow] =useState(null);
   const intervalRef = useRef(null);
    let intervalId = setInterval(()=>{
        ref.current = ref.current +1;
        setTime(ref.current);
    }, 1000)

    function handleStop(){
      setTime(ref.current);
      // i don't know how to stop here :
    }
    function handleStart(){
     setStartTime(Date.now());
     setNow(Date.now());

     clearInterval(intervalRef.current);
    }
    function handleReset(){
        clearInterval(intervalId);
        alert("your timer has been reset")
    }
    return(
<>
<button onClick={handleStop}>Stop</button>
<button onClick ={handleStart}>Start</button>
<button onClick={handleReset}>Reset</button>
</>
    )
}

export default Stopwatch;