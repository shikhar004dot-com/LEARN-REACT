import { useState } from "react"
function App(){
  let [count,setCount]=useState(0);
  function handleCount(){
    setCount(count+1);
  }
  return(
    <div>
      <h1>Multiple conditions in React js</h1>
      {count}
      <br></br>
      <button onClick={handleCount}>Increment</button> 
      <br></br>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      {
      count==0?<h1>Condition 0</h1>
      :count==1?<h1>Condition 1</h1>
      :count==2?<h1>Condition 2</h1>
      :count==3?<h1>Condition 3</h1>
      :count==4?<h1>Condition 4</h1>
      :<h2>Other condition</h2>
      }
    </div>
  )
}
export default App;