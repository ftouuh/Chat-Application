import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Chat from "./pages/Chat/chat.jsx";
import Home from "./pages/home/home.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
