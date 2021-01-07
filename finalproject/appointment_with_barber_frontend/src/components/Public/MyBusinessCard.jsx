import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./MybusinessCard.css";
//functions imports
import api from "../api/api";
const MyBusinessCard = ({
  businessName,
  location,
  avg,
  apCard,
  bsCard,
  month,
  day,
  hour,
  id,
  user,
  geolocation,
  businessAddress,
  ownerFirstName,
  ownerLastName,
  phone,
  setUser,
}) => {
  //states
  //fuctions

  {
    return (
      <div className="card">
        <NavLink exact to={`editAddBusiness/${id}`}>
          <img
            className="profile-pic"
            src="https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg"
            alt=""
          />
        </NavLink>
        <div className="section">
          <NavLink exact to={`editAddBusiness/${id}`}>
            <h3 className="business-name">{businessName}</h3>
          </NavLink>

          <NavLink exact to={`busappointments/${id}`}>
            <img className="calendar-icon" src="/img/calendar.svg" alt=""></img>
          </NavLink>
        </div>
        <img className="location-icon" src="img/location.svg" />
        <h3 className="location">{location}</h3>
        <h3 className="avg">{avg}/5</h3>

        <div className="edge"></div>
      </div>
    );
  }
};

export default MyBusinessCard;
