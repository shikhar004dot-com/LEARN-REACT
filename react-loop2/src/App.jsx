import User from "./User";

function App(){
  let userName=["Shikhar","Sam","Peter","Bruce"];
  let collegeName=["GLA","IIT","NIT","MIT"];
  let obj=[
    {
      id:1,
      name:"shikhar",
      age:20,
      email:"shikhar@gmail.com"
    },
     {
      id:2,
      name:"Peter",
      age:18,
      email:"peter@gmail.com"
    },
     {
      id:3,
      name:"john",
      age:22,
      email:"john@gmail.com"
    }
  ]
  
  return(
    <div>
     <h1>Reuse components in loop</h1>
     {obj.map((item)=>(
      <div key={item.id}>
        <User user={item}/>
      </div>

     ))}
    </div>
  )
}
export default App;