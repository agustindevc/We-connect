import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import "./styles/theme.css";

const App = () => {
  return (
    <BrowserRouter basename="/We-connect">
      <div className="main-container">
        {/* Header común (opcional) */}
        {/* <header>Navbar</header> */}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>

        {/* Footer común (opcional) */}
        {/* <footer>Footer</footer> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
