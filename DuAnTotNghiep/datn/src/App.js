import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Phongtro from "./pages/Phongtro";
import Chitietphongtro from "./pages/Chitietphongtro";
import Thuetro from "./pages/Thuetro";
import Login from "./pages/Login";
import Thongtincanhan from "./pages/thongtincanhan";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phongtro" element={<Phongtro />} />
        <Route path="/chitietphongtro" element={<Chitietphongtro />} />
        <Route path="/thuetro" element={<Thuetro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thongtincanhan" element={<Thongtincanhan />} />

      </Routes>
  );
}

export default App;