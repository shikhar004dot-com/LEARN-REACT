import { useState } from "react";

function App(){
  let [gender,setGender]=useState("male");
  let [city,setCity]=useState("");
  
  return(
    <div>
      <h1>Dropdown and radio</h1>
      <h4>Select gender:</h4> 
      {/* name should be same for radio */}
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender=="male"} id="male"/>
      <label htmlFor="male">Male</label>
      <br/>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=="female"} id="female"/>
      <label htmlFor="female">Female</label>

      <h3>Selected gender: {gender}</h3>
      <br/>
      <h4>Select City</h4>
      <select defaultValue={"deoria"} onChange={(event)=>setCity(event.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="deoria">Deoria</option>
        <option value="gorakhpur">Gorakhpur</option>
        <option value="kushinagar">Kushinagar</option>
      </select>
      <h4>Selected city: {city}</h4>
    </div>
  )
}
export default App;