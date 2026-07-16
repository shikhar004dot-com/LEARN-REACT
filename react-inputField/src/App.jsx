import { useState } from "react";

function App(){
  let [name,setName]=useState("");
  let [password,setPassword]=useState("");
  let [email,setEmail]=useState("");
  return(
    <div>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input>
        <br></br>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}placeholder="Enter password"></input>
        <br></br>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email"></input>
        <br></br>
        <button onClick={()=>{setName(""),setPassword(""),setEmail("")}}>Clear all</button>
        <br></br>
        <button>Submit</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  )
}
export default App;