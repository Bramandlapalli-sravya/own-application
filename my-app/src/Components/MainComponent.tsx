import React from "react";
import TopNavigation from './TopNavigation/index.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/index.tsx";
import Services from "./Services/index.tsx";
import About from "./About/index.tsx";
import Contact from "./Contact/index.tsx";
import Logout from "./Logout/index.tsx";
import ProductsPageList from "./Pages/ProductsPageList.js";
import ProductsItem from "./Pages/ProductsItem.js";
import BreadCrumbs from "./BreadCrumbs.js";

const MainComponent = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <TopNavigation />
        <BreadCrumbs />
        {/* <Form></Form> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/products' element={<ProductsPageList />} />
          <Route path='/products/:id' element={<ProductsItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;