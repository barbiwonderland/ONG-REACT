import React, { memo } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Home from "../screens/home";
import News from "../screens/news";
import About from "../screens/about";
import Details from "../screens/news/details";
import Contact from "../screens/contact";
import Donation from "../screens/donation";
import NotFound from "../screens/notFound";

import Activity from "../screens/activity";
import Testimonials from "../screens/testimonials";
import Activities from "../screens/activities";
import Thanks from "../screens/thanks";
import FooterWeb from "../components/FooterWeb";
import HeaderWeb from "../components/HeaderWeb";

// const CustomRoute = memo(({ component: Component, ...rest }) => (
//   <>
//     <HeaderWeb />
//     <Route
//       {...rest}
//       component={(props) => {
//         return <Component {...props} />;
//       }}
//     />
//     <FooterWeb />
//   </>
// ));


export const PublicRoute = () => {
  

  return (
    <>
      <HeaderWeb />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
      >
        <Route exact path="/gracias" component={Thanks} />
        <Route exact path="/testimonios" component={Testimonials} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/novedades/:id" component={Details} />
        <Route exact path="/nosotros" component={About} />
        <Route exact path="/actividades" component={Activities} />
        <Route
          exact
          path="/actividades/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <Activity id={id} />;
          }}
        />
        <Route exact path="/donar" component={Donation} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </AnimatedSwitch>
      <FooterWeb />
    </>
  );
};
