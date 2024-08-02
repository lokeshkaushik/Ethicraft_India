import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navigation />
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

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default App;
