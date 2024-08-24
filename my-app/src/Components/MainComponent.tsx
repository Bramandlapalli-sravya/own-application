import React from "react";
import TopNavigation from './TopNavigation/index.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/index.tsx";
import Services from "./Services/index.tsx";
import About from "./About/index.tsx";
import Contact from "./Contact/index.tsx";
import { Form } from "./Form.jsx";

const MainComponent = () => {
  return (
    <div className="main">
      <Router>
        <TopNavigation />
        <Form></Form>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainComponent;