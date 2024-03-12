import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login.jsx";
import Signup from "./components/signup/signup.jsx";
import Chat from "./components/Chat/Chat.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/chat' element={<Chat/>} />
      </Routes>
    </>
  );
}

export default App;
