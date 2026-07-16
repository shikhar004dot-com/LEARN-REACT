import College from "./College";
import Student from "./Student";
import User from "./User"
import { useState } from "react";
import Wrapper from "./Wrapper";
function App(){
  let name="Shikhar Srivastava"
  let userObject={
    name:"Shikhar Srivastava",
    age:29,
    email:"shikharsrivastava@gmail.com"
  }
  let collegeName=["GLA","IIT","DU","AU","NIT"];

  let [student,setStudent]=useState("Sam");
  function changeStudent(){
    setStudent("Peter");
  }
  return(
    <div>
      
      {/*React creates an object { name: "Shikhar Srivastava" } and gives it to User.*/}
      <h1>Props in react js</h1>
      {/* <User name={name} age={20} email="shikharsrivastava@gmail.com"/> */}
      <College name={collegeName}/>
      <User props={userObject}/>
      <button onClick={changeStudent}>Change Student</button>
      {Student && <Student name={student}/>}
      <Wrapper>
        <h1>Hello Everyone</h1>
      </Wrapper>
      <hr/>
     
    </div>
  )
}
export default App;