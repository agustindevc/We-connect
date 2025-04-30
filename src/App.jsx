import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";
import "./styles/theme.css";
import ScrollToTopButton from './components/ScrollToTopButton';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter basename="/We-connect">
      <div className="main-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <ScrollToTopButton></ScrollToTopButton>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;