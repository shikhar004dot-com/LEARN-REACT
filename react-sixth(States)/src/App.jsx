import {useState} from "react";
import Counter from "./Counter";
function App(){
  {/* first parameter is the value and second one is function thats updates the state.*/}
  let [fruit,setFruit]=useState("Apple");
  let changeFruit=()=>{
    setFruit("Banana");
  }
  return(
    <div>
      <h1>State in react JS</h1>
      <h1>{fruit}</h1>
      <button onClick={changeFruit}>Change fruit</button>
      <Counter/>
    </div>
  )
}
export default App;