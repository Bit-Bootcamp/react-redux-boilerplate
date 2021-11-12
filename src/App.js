import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar always shows no matter which route we're on */}
      <TheNavbar />

      {/* Setting up our routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        {/* if the URL is /login  , render the Login component */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
