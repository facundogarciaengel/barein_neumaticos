import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
             <img src={logo} alt="Logo" width="80" height="80" /> 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/servicios" className="nav-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

