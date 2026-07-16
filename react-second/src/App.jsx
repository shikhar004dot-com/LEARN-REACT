import {Login, Settings, UserKey} from "./UserComponent";
import SignUp from "./UserComponent";
function App(){
  return (
    <div>
      <h1>Import and exporting Components</h1>
      <Login/>
      <SignUp/>
      <Settings/>
      <h1>{UserKey}</h1>
    </div>
  )
}
export default App;