import React, { Fragment } from "react";
import "../styles/card.css";
import noImagePlaceholder from "../assets/no_image_placeholder.png";

function Card({ image, title, description }) {
  return (
    <div className="cardContainer">
      <div
        className="cardImage"
        style={{
          backgroundImage: `url(${image || noImagePlaceholder})`,
        }}
      ></div>
      <div className="cardContent">
        <div className="cardTitle">
          <h4>{title}</h4>
        </div>
        <div className="cardText overflow-auto"><Fragment>{description}</Fragment></div>
      </div>
    </div>
  );
}

export default Card;
