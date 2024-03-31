import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import RazaDetalles from "./RazaDetalles";
import Raza from "./Raza";
import Inicio from "./Inicio";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>

      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
  <h1>Navigation Bar</h1>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">        
        <Link className="nav-link" to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Raza">Razas</Link>
      </li>
    </ul>
  </div>
</Navbar> 

      <Container>
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="Raza" element={<Raza />} />
          <Route path="Raza/id" element={<RazaDetalles id={""} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;