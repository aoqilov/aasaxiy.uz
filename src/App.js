import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Miks from "./components/miks/Miks";
import Navbar from "./components/navbar/Navbar";
import { ShopContext } from "./context/Shop";
import Admin from "./page/Admin";
import Books from "./page/Books";
import Game from "./page/Game";
import Home from "./page/Home";
import Kitchen from "./page/Kitchen";
import OneCard from "./page/OneCard";
import Phone from "./page/Phone";
import Sport from "./page/Sport";
import Tv from "./page/Tv";
import Xarid from "./page/Xarid";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Miks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<OneCard />} />
          <Route path="/game" element={<Game />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/xarid" element={<Xarid />} />
          <Route path="/admin-assaxiy" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
