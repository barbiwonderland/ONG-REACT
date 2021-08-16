import React from "react";
import confirmAndDelete from "../../../utils/confirmAndDelete";

export const TestimonialCardScreen = ({ testimonial }) => {
  const { img, name, id  } = testimonial;

  const CONTENT_TYPE = "testimonials";
  
  return (
    <div className="bg-card-activity mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start rounded-3 p-1"
            alt="foto"
          />
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div className="card-body d-flex justify-content-center">
            <button className="m-2 btn btn-secondary">EDITAR</button>
            <button className="m-2 btn btn-danger" onClick={() => confirmAndDelete(id, CONTENT_TYPE)}>ELIMINAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};
