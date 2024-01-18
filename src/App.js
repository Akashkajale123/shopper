import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop/>}/>
      </Routes>
    </Router>
  );
};

export default App;
