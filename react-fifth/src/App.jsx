// function App(){
//   return(
//     <div>
//       <h1>Event and function call</h1>
//       <button onClick={()=>alert("Function is called")}>Click me</button>
//     </div>
//   )
// }
function fruit(){
  alert("Function is called");
}
function App(){
  let fruit=()=>{
    alert("You want to eat fruit?");  {/* Inner scope > Outer scope*/}
  }
  let vegies=(name)=>{
    alert(name+" "+"lover");
  }
  return(
    <div>
      <h1>Event and function call</h1>
      <button onClick={fruit}>Click me</button>
      <br></br>
      <button onClick={fruit}>Click me</button>
      <br></br>
      {/* for parameter*/}
      <button onClick={()=>vegies("Brinjal")}>Click me</button>
    </div>
  )
}

export default App;

