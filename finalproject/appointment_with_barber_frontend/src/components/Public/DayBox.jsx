import React from "react";
import "./DayBox.css";
import { NavLink } from "react-router-dom";

const DayBox = ({ isworking, daynum, businessId, month }) => {
  //functions
  //   const clickHandler = () => {
  //     console.log("clciked");
  //   };
  console.log("month is: ", month);
  return isworking ? (
    <NavLink exact to={`/hourspage/${daynum}/${month}/${businessId}`}>
      {" "}
      <div className="DayBox blue">{daynum}</div>
    </NavLink>
  ) : (
    <div className="DayBox red">{daynum}</div>
  );
};

export default DayBox;
