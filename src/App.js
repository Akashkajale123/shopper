import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.js";
import ShopCategory from "./pages/ShopCategory.js";
import LoginSignup from "./pages/LoginSignup.js";
import Product from "./pages/Product.js";
import Navbar from "./components/Navbar/Navbar.js";
import Cart from "./pages/Cart.js";
import Footer from "./components/Footer/Footer.js";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory category="men" banner={men_banner} />}
        />
        <Route
          path="/womens"
          element={<ShopCategory category="women" banner={women_banner} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kid" banner={kids_banner} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path="/product/:productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
