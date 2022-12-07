import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./appmobile.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavbarComonents";
import Footer from "./components/Footer";
import Pokemon from "./pages/pokemon/Pokemon";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
