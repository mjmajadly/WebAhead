import React, { useState, useEffect } from "react";
import "./MyAppointments.css";
import { toast } from "react-toastify";
//functions imports
import api from "../api/api";
//components imports
import Title from "../Public/Title";
import Card from "../Public/Card";

//Login component
const MyAppointments = ({ user, setUser }) => {
  //states
  const [businesses, setBusinesses] = useState([]);
  // console.log("businesses is: ", businesses);

  //functions
  const getBusinessNameById = (id) => {
    if (businesses.length > 0) {
      const name = businesses.filter((business) => business.id == id)[0]
        .businessname;
      return name;
    }
  };
  //useEffect
  useEffect(() => {
    api("getbusiness", {
      method: "GET",
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((businesses) => setBusinesses(businesses))
      .catch((err) => console.error(err));
  }, []);

  {
    return user.myAppointments == null ||
      JSON.parse(user.myAppointments).length === 0 ? (
      <div className="MyAppointments">
        <Title title="My Appointments" />
        <h1 className="msg">You Have No Appointments Yet</h1>
      </div>
    ) : (
      <div className="MyAppointments">
        <Title title="My Appointments" />
        {JSON.parse(user.myAppointments).map((appointment, i) => {
          return (
            <Card
              key={i}
              id={appointment.businessId}
              apCard={true}
              businessName={getBusinessNameById(appointment.businessId)}
              day={appointment.date}
              month={appointment.month}
              hour={appointment.hour}
              setUser={setUser}
            />
          );
        })}
      </div>
    );
  }
};

export default MyAppointments;
