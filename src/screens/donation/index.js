import React from "react";
import { TitlesComponent } from "../../components/TitlesComponent";
import "./donation.css";

function index() {
  return (
    <div>
      <TitlesComponent title={"Donar"} />
      <div className="container d-flex align-items-center justify-content-center">
        <a className="btn-donar" href="https://mpago.la/1xByUYx">Donar</a>
      </div>
    </div>
  );
}

export default index;
