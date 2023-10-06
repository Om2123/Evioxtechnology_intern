import React, { useEffect } from "react";
 import { Redirect } from "react-router-dom";

 
export const Logout = ({ onLogout }) => {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
};

 
export default  (Logout);
