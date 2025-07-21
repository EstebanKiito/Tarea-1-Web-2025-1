import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
