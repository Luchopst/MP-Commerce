import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Prinsipal from "./Components/Prinsipal/Prinsipal";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Card from "./Components/Card/Card";
import Productos from "./Components/Adm/Productos/Productos";

function App() {
  return (
    <div className="contenedor-general">
      <Nav />

      <Routes>
        <Route path="/" element={<Prinsipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Card />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
