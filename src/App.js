import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { PublicRoute } from "./routes/PublicRoute";
import { Admin } from "./routes/Admin";
import { AnimatedSwitch } from "react-router-transition";
import ProtectedBackOffice from './components/ProtectedBackoffice'
const App = () => {
  //Check if a token exists in localstorage
  const token = localStorage.getItem("token");
  if (token) {
    console.log("authenticated user");
  }

  return (
    <BrowserRouter>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
      >
        {/* Future Protected route */}
        <ProtectedBackOffice path="/backoffice" component={Admin} />
        <Route path="/" component={PublicRoute} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default App;
