import { useState } from "react";
function Counter(){
    let [count,setCount]=useState(0);
    function increment(){
        setCount(count+=1);
    }
    function decrement(){
        setCount(count-=1);
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>Increment</button>
            <br></br>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;