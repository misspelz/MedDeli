import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Services } from "../pages/Services/Services";
import { Blog } from "../pages/Blog/Blog";

export const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}

        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
