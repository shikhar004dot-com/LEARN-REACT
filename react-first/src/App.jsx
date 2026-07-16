import Header from "./Header";
function App(){
  return(
    <div>
      <Header/>
      <h1>Hello React</h1>
      <h1>Lets learn it</h1>
      <Fruit/>
      <Colour/>
    </div> 
  )
}
function Fruit(){
  return(
   <div>
    <h2>Apple</h2>
   </div>
  )
}
function Colour(){
  return(
    <div>
      <h3>Red</h3>
    </div>
  )
}
export default App;
