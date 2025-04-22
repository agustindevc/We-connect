import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import "./styles/theme.css";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <BrowserRouter basename="/We-connect">
      <div className="main-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>

        <ScrollToTopButton />
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
