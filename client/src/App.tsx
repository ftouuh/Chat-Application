import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/signup/signup/";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/chat' element={<Chat/>} /> {/* Closing angle bracket added here */}
      </Routes>
    </>
  );
}

export default App;
