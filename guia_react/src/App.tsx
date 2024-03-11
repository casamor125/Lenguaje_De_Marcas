
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Inici";
import PuntsInteres from "./Punts";
import Restaurants from "./Restaurants";
import Hotel from "./Hotel";
import Activitats from "./Activitats";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import { Navbar } from "react-bootstrap";
function App() {

  return (
    <BrowserRouter>

     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <h1>Navigation Bar</h1>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">        
        <Link className="nav-link" to="/">Inici</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Punts">Punts d'interes</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" to="/Hotel">Hotels</Link>
      </li>
      <li className="nav-item">
              <Link className="nav-link" to="/Restaurants">Restaurants</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/Activitats">Activitats</Link>
      </li>
    </ul>
  </div>
</nav> 
      <Routes>
        <Route index element={<Home />} />
        <Route path = "/Punts" element={<PuntsInteres />} />
        <Route path = "Restaurants" element={<Restaurants />} />
        <Route path = "Hotel" element={<Hotel />} />
        <Route path = "Activitats" element={<Activitats />} />
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;


