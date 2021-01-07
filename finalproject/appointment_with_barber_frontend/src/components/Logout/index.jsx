import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    // console.log('logout');
    window.localStorage.removeItem("access_token");
  }, []);

  history.push("/login");

  return <h1>Logging out...</h1>;
};
export default Logout;
