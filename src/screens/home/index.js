import React from "react";
import { Link } from "react-router-dom";
import { Slider } from "./components/Slider/Slider";
import "../../styles/HomeTestimonialStyles.css";
import { NewsHome } from "./components/NewsHome";
import { ActivitiesHome } from "./components/ActivitiesHome";
import {
  ListNews,
  ListSlides,
  ListActivities,
} from "../../services/homeService";
import TestimonialsHome from "./components/TestimonialsHome";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import { TitlesComponent } from "../../components/TitlesComponent";

function Home() {
  const news = ListNews();
  const slides = ListSlides();
  const activities = ListActivities();

  const { newsList, loading, error } = news;
  const { activitiesList, status, error2 } = activities;

  return (
    <>
    <div className="row ">
    <h2 className="text-center titlesHome text-uppercase mb-4 ">Bienvenido a nuestra ONG</h2>
  </div>
    <div>
    

      <Slider slides={slides} />
      <div className="container-fluid mt-5 ">
      <TitlesComponent title="Últimas Novedades"/>

        <div className="row">
          <NewsHome news={newsList} error={error} />
        </div>
          <TitlesComponent title="Últimas Actividades"/>
          <ActivitiesList />
       <div className="row ">
        {/*    <div className="bg-light text-center titlesHome">
            <Link to="/testimonios">Ver todos</Link>
          </div> */}

          <TestimonialsHome />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
