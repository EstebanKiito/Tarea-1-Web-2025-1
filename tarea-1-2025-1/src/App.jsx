import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (status) => {
    setIsLoggedIn(status);
    if (!status) {
      alert("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/login"
          element={
            <Login setIsLoggedIn={handleLogin} isLoggedIn={isLoggedIn} />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
