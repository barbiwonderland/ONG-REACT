import React, { useCallback, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const intervalAnimation = 2500;

export const Slider = ({ slides }) => {
  {
    console.log(slides);
  }
  const Data = useMemo(() => {
    return (
      slides &&
      slides.map((slide) => {
        return (
          <Carousel.Item key={slide.id} interval={intervalAnimation}>
            <img className="d-block w-100" src={slide.image} alt={slide.name} />
            <Carousel.Caption className="pb-0 notArrow">
              <h3 className="sliderTitles ">{slide.name}</h3>
              <p className="sliderSubtitles">{slide.description}</p>
              {console.log(slide.id)}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    );
  }, [slides]);

  return (
    <React.Fragment>
      <Carousel fade>{Data}</Carousel>
    </React.Fragment>
  );
};
