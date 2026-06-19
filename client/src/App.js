import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Offers from "./pages/Offers";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SellerDashboard from "./pages/SellerDashboard";
import NotificationsPage from "./pages/NotificationsPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="/notifications" element={<NotificationsPage />} />

        <Route path="/seller-dashboard" element={<SellerDashboard />} />

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;