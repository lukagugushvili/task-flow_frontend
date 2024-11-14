import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/Global_Styles.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
