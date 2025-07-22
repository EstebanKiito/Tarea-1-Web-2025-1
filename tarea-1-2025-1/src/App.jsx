import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);

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
            <Login
              setData={setData}
              setIsLoggedIn={handleLogin}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile data={data} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts isLoggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
