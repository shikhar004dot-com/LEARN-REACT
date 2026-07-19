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
      <h1>Looping in jsx</h1>
      <table border="2">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            obj.map((item)=>(
              
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            
            ))
          }
        </tbody>
      </table>
      {/* <h2>Dummy data</h2>
      <table border="3">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>age</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Shikhar</td>
            <td>20</td>
            <td>shikhar@email.com</td>
          </tr>
           <tr>
            <td>2</td>
            <td>Peter</td>
            <td>21</td>
            <td>peter@email.com</td>
          </tr>
           <tr>
            <td>3</td>
            <td>Marston</td>
            <td>25</td>
            <td>marston@email.com</td>
          </tr>
           <tr>
            <td>4</td>
            <td>Sam</td>
            <td>20</td>
            <td>sam@email.com</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}
export default App;