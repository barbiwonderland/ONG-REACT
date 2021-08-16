import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ROLE_ADMIN = 1;
function ProtectedBackOffice({ component: Comp, ...rest }) {
  const {user:{role_id}}= useSelector((state) => state.userInfo)  
  const renderComponents =  <Comp />
  
  return <Route {...rest}>{renderComponents}</Route>;
}

export default ProtectedBackOffice;
