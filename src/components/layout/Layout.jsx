// src/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Navbar from "./Navbar";
import Footer from "./Footer";

// We remove the { children } prop
const Layout = () => { 
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* <Outlet /> is where the page content (Home, Projects, etc.) will render */}
      <main className="flex-grow">
          <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;