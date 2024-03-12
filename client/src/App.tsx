import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from "./components/login/login"
import Signup from "./components/signup/signup/"
function App() {

  return (
   <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </>
  )
}

export default App
