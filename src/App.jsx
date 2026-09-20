import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrders from "./pages/AdminOrders";
import AdminLeads from "./pages/AdminLeads";
import Listings from "./pages/Listings";
import OrderSuccess from "./pages/OrderSuccess";
import SellWithUs from "./pages/SellWithUs";

import Footer from "./components/Footer";
import Logo from "./components/Logo";

export default function App() {
  const [cart, setCart] = useState([]);

  // 🔐 Admin state (reload-safe + sync)
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  // 🔁 Sync admin state with localStorage
  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* NAVBAR */}
      <nav className="bg-yellow-400 sticky top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={36} />
            <span className="font-bold text-xl tracking-wide">
              GaonKiMakki
            </span>
          </Link>

          <div className="flex gap-6 font-medium items-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/cart" className="hover:underline">
              Cart ({cart.reduce((s, x) => s + x.qty, 0)})
            </Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/listings" className="hover:underline">Mandi</Link>

            <Link
              to="/sell"
              className="text-green-900 font-semibold hover:underline"
            >
              Sell with Us
            </Link>

            {isAdmin && (
              <Link
                to="/admin/dashboard"
                className="text-sm bg-black/20 px-2 py-1 rounded"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />

          <Route path="/about" element={<About />} />

          {/* 🌾 SELL WITH US PAGE */}
          <Route path="/sell" element={<SellWithUs />} />

          <Route
            path="/checkout"
            element={<Checkout cart={cart} setCart={setCart} />}
          />

          {/* Order receipt */}
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* Admin login */}
          <Route
            path="/admin"
            element={<AdminLogin setIsAdmin={setIsAdmin} />}
          />

          {/* Admin dashboard (protected) */}
          <Route
            path="/admin/dashboard"
            element={
              isAdmin ? (
                <AdminDashboard setIsAdmin={setIsAdmin} />
              ) : (
                <Navigate to="/admin" />
              )
            }
          />

          {/* Admin orders (protected) */}
          <Route
            path="/admin/orders"
            element={
              isAdmin ? <AdminOrders /> : <Navigate to="/admin" />
            }
          />

          {/* Admin leads (protected) */}
          <Route
            path="/admin/leads"
            element={
              isAdmin ? <AdminLeads /> : <Navigate to="/admin" />
            }
          />

          {/* Public mandi listings */}
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
