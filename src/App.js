import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contatos from "./pages/contatos";
import Sobre from "./pages/sobre";
import Inicio from "./pages/inicio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./assets/css/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default App;
