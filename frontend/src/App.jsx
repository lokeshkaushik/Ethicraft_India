import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

import "./assets/css/navbar.css";
import Navbar from "./assets/components/navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<p>Services</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
          <Route path="*" element={<p>NotFound</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
