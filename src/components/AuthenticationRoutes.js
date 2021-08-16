import * as React from "react";
import { Redirect, Route } from "react-router-dom";

function AuthenticationRoutes({ children, ...rest }) {
  //esta es una llamada falsa a un método que debe devolver si el usuario está autenticado.
  //Reemplazar por el método real
  const useAuth = () => {
    return { auth: Math.round(Math.random() * 100) > 50 };
  };

  const { auth } = useAuth();

  const shouldRenderChildren = React.useCallback(
    ({ location }) =>
      !auth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      ),
    [auth, children]
  );

  return <Route {...rest} render={shouldRenderChildren} />;
}

export default AuthenticationRoutes;
