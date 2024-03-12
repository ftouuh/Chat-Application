import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Chat from "./pages/Chat/chat.jsx";

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
