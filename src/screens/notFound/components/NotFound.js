import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../../assets/undraw_page_not_found_su7k.svg";
import "./notFound.css";

function NotFound() {
  return (
    <div className="container col-10 col-md-8 col-lg-6 vh-100 d-flex flex-column align-items-center  justify-content-center">
      <img src={notFoundImg} className="img-fluid" alt="not found" />
      <div className="mt-4 p-2 text-center">
        <h3 className="my-4 page_not_found__text">
          <p className="h1 fw-bolder page_not_found__title">Ups! </p> Lo
          sentimos pero esta página no esta disponible
        </h3>
        <Link
          to="/"
          className="d-flex justify-content-center text-decoration-none page_not_found__link"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
