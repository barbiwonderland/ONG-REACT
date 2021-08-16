import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { TestimonialCardScreen } from "./TestimonialCardScreen";
import imgTest from "../../../assets/imgTest.jpg";

export const TestimonialsScreen = ({ props }) => {
  const testimonials = [
    { id: 1, img: imgTest, name: "Ayuda Comunitaria" },
    { id: 2, img: imgTest, name: "Comedor Infantil" },
    { id: 3, img: imgTest, name: "Apoyo Escolar" },
    { id: 4, img: imgTest, name: "Apoyo Escolar" },
  ];

  const memoTestimonial = useMemo(
    () =>
      testimonials.map((testimonial) => {
        return (
          <TestimonialCardScreen
            key={testimonial.id}
            testimonial={testimonial}
          />
        );
      }),
    [props]
  );

  return (
    <div className="container-md mt-3 mb-3 p-3 bg-activities">
      <div className="row d-flex align-items-center mb-2 text-center">
        <div className="col">
          <h3>Testimonios:</h3>
        </div>
        <div className="col text-center">
          <Link
            className="btn btn-success"
            to="/backoffice/testimonials/create"
          >
            Agregar Testimonio
          </Link>
        </div>
      </div>
      {memoTestimonial}
    </div>
  );
};
