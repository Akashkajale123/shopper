import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.js";
import ShopCategory from "./pages/ShopCategory.js";
import LoginSignup from "./pages/LoginSignup.js";
import Product from "./pages/Product.js";
import Navbar from "./components/Navbar/Navbar.js";
import Cart from "./pages/Cart.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/womens" element={<ShopCategory category="womens" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
