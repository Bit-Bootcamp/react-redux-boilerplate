import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import "./App.css";

import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <TheNavbar />
      <p> Background Color: {theme.backgroundColor}</p>
      <p> Text Color: {theme.textColor}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
