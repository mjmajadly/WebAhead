import React, { useEffect, useState } from "react";

//functions imports
import api from "../api/api";
import "./Client.css";

const Client = ({ hour, id }) => {
  //states
  const [user, setUser] = useState({});
  //useEffect
  console.log("iddddddddddddddDDDD: ", id);
  useEffect(() => {
    api(`user/${id}`, {
      method: "GET",
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((user) => {
        console.log("THE USER IS: ", user);
        setUser(user);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="client-card">
      <img
        className="profile-pic"
        src="https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg"
        alt="profile picture"
      />
      <h2 className="full-name">
        {user.firstname} {user.lastname}
      </h2>
      <h2 className="hour">{hour}</h2>
    </div>
  );
};

export default Client;
