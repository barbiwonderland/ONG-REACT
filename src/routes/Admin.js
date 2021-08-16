import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import { ActivitiesScreen } from "../screens/ActivitiesScreen";
import { MembersFormBackOffice } from "../components/MembersFormBackOffice";
import BackOfficeSlide from "../components/BackOfficeSlides";
import BackofficeCategories from "../components/BackofficeCategories";
import BackOfficeOrganizationScreen from "../screens/BackofficeOrganizationScreen";
import { AnimatedSwitch } from "react-router-transition";

export const Admin = () => {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 1 }}
      atActive={{ opacity: 1 }}
    >
      <Route exact path="/backoffice" component={Dashboard} />
      <Route
        exact
        path="/backoffice/categories"
        component={BackofficeCategories}
      />
      <Route exact path="/backoffice/activities" component={ActivitiesScreen} />
      <Route
        exact
        path="/backoffice/organization/edit"
        component={MembersFormBackOffice}
      />
      <Route exact path="/backoffice/slides" component={BackOfficeSlide} />
      <Route exact path="/backoffice/slides/create" />
      <Route
        exact
        path="/backoffice/organization"
        component={BackOfficeOrganizationScreen}
      />
    </AnimatedSwitch>
  );
};
