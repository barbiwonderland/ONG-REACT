import React from "react";
import {Link} from "react-router-dom"
import "../styles/backofficeSidebar.css";

const paths = {
  //Replace paths for real backoffice sections later
  inicio: "/backoffice",
  categories: "/backoffice/categories",
  activities: "/backoffice/activities",
  
};

function BackofficeSidebar(props) {
  function openSidebar() {
    let show = props.show;
    if (show) {
      return "sidebar sidebar-open shadow";
    } else {
      return "sidebar";
    }
  }

  function getLinks() {
    //Replace <a> for <Link to="/path"> later
    const listItems = Object.keys(paths).map((key, index) => (
      <li className="my-2 pt-3" key={index + key}>
        <Link
          className="text-capitalize text-decoration-none fw-bold fs-5 p-2 d-block"
          to={paths[key]}
        >
          {key}
        </Link>
      </li>
    ));
    return <ul className="mt-3">{listItems}</ul>;
  }

  const listLinks = getLinks();
  const sidebarStatus = openSidebar();

  return (
    <div id="backofficeSidebar" className={sidebarStatus}>
      <div className="mx-4 p-2 d-flex align-items-center justify-content-between">
        <h4 className="me-2 mb-0 fw-bold text-muted">Menú</h4>
        <button
          type="button"
          className="btn-close text-reset"
          aria-label="Close"
          onClick={props.handleClose}
        ></button>
      </div>
      <div className="mx-4 mt-2">{listLinks}</div>
    </div>
  );
}

export default BackofficeSidebar;
