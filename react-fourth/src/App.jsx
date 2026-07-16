// const name="Shikhar Srivastava"
function App(){
  let x=10;
  let y=20;
  function fruit(){
    return "Mango"
  }
  function multiply(a,b){
    return a*b;
  }
  const obj={
    name:"Shikhar Srivastava",
    email:"shikhar@gmail.com",
    age:"20",
  }
  const arr=["shikhar","peter","sam"]
  return(
    <div>
      <h1>Curly Braces</h1>
      <h2>{name?name:"User not found"}</h2>
      <h3>{x+y}</h3>
      <h4>{fruit()}</h4>
      <h4>{multiply(10,20)}</h4>
      <h4>{obj.email}</h4>
      <h2>{arr[0]}</h2>
    </div>
  )
}
export default App;