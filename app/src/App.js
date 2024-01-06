import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/Aboutus/About";
import Contact from "./Components/contactus/Contact";
import Footer from "./Components/Footer/Footer";
import Suggestion from "./Components/Suggestion/Suggestion";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home  theme={theme}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/suggestion" element={<Suggestion />} />
        </Routes>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
