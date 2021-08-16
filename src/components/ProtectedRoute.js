import React, { useCallback } from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem("userInfo") ? true : false;

  const componentConditional = useCallback(
    ({ location }) => {
      if (isLogged) {
        return <Component {...rest} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
              },
            }}
          ></Redirect>
        );
      }
    },
    [isLogged, Component]
  );

  return <Route {...rest} render={componentConditional} />;
};
