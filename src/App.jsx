import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Services from "./Components/services"
import Contact from "./Components/contact";
import ContactForm from "./Components/contacform";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
