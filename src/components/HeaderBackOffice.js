import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BackofficeSidebar from "./BackofficeSidebar";
import Logo from "../assets/LOGO-SOMOSMAS.png";
import iconMenu from "../assets/icon-menu.png";
import "../styles/backOfficeStyles.css";

export const HeaderBackOffice = ({createNews}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
      <header>
        <BackofficeSidebar show={show} handleClose={handleClose} />
        <nav className="navbar navbar-light navbar-backofice">
          <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <img
                src={Logo}
                alt="logo"
                height="60"
                className="d-inline-block align-text-top"
              />
              <button className="btn-sidebar" onClick={handleShow}>
                <img
                  src={iconMenu}
                  alt="logo"
                  height="20"
                  className="d-inline-block align-text-top"
                />
              </button>
            </div>
            <ul className="navbar-nav flex-row">
              <li className="nav-item p-2">
                <Link to="/backoffice/news/create" className="nav-link">
                  Crear una novedad
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/backoffice/users/create" className="nav-link">
                  Crear un usuario
                </Link>
              </li>
              <li>
                <Link to="/backoffice/members/create" className="nav-link">
                  Crear un miembro
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    
  );
};
