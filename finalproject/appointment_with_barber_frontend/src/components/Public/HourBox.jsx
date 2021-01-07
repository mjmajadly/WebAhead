import React, { useState } from "react";
import { toast } from "react-toastify";
import "./HourBox.css";

//functions imports
import api from "../api/api";

const HourBox = ({ hour, calendarName, businessId, setChanges, full }) => {
  console.log("FULLL: ", full);
  //functions
  const clickHandler = () => {
    const obj = {
      day: calendarName,
      hour: hour,
      businessId: businessId,
    };
    console.log("The obj(parsed) is: ", obj);
    console.log("The obj(stringified) is: ", JSON.stringify(obj));

    api("appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(obj),
    })
      .then((appointments) => {
        console.log("you appointments are: ", appointments);
        toast.success("The Appointment is Set ", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        setChanges((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };
  return full ? (
    <h2 className="not-available">No Hours Available</h2>
  ) : (
    <div onClick={clickHandler} className="HourBox">
      {hour}
    </div>
  );
};

export default HourBox;
