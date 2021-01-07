import React, { useEffect, useState } from "react";
import "./BusAppointments.css";
import { NavLink } from "react-router-dom";
//functions imports
import api from "../api/api";

//components imports
import Card from "../Public/Card";
import Title from "../Public/Title";
import DayBoxBus from "../Public/DayBoxBus";

const BusAppointments = () => {
  let businessId = window.location.pathname.split("/")[2];
  //businesspage/:id
  //states
  const [business, setBusiness] = useState(null);
  const [selectVal, setSelectVal] = useState(null);
  const [days, setDays] = useState([]);
  const [msg, setMsg] = useState(null);
  const [day1, setDay1] = useState(0);
  const daysObj = {
    0: "Su",
    1: "Mo",
    2: "Tu",
    3: "We",
    4: "Th",
    5: "Fr",
    6: "Sa",
    7: "Su",
    8: "Mo",
    9: "Tu",
    10: "We",
    11: "Th",
    12: "Fr",
    13: "Sa",
  };

  // console.log("selectVAAAAAAAAAAAAAAL: ", selectVal);
  //functions

  const changeHandler = (e) => {
    setSelectVal(e.target.value);
  };
  //useEffect
  useEffect(() => {
    api(`business/${businessId}`, {
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((business) => {
        //   console.log("the business issssssssssssssssssss: ", business);
        setBusiness(business);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (selectVal != null) {
      let firstDay = new Date(`${selectVal} 1, 2021 23:15:30`);
      setDay1(firstDay.getDay());
      api(`calendar/${selectVal}_${businessId}`, {
        headers: { token: localStorage.getItem("access_token") },
      })
        .then((calendar) => {
          if (calendar.msg) {
            setMsg(calendar.msg);
          } else {
            // console.log("HERE IS THE CALENDAR: ", calendar);
            const daynumsArr = calendar.map((day) => {
              return {
                daynum: day.daynum,
                isworking: day.isworking,
              };
            });
            console.log(daynumsArr);
            daynumsArr.sort((a, b) => {
              if (a.daynum > b.daynum) return 1;
              else if (a.daynum == b.daynum) return 0;
              else return -1;
            });
            console.log(daynumsArr);
            setDays(daynumsArr);
            setMsg(null);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [selectVal]);

  // console.log("BUSINESS STAAATE: ", business);
  {
    return business == null ? (
      <img
        src="https://media2.giphy.com/media/1dH0xIDSToAtZYwf8D/giphy.gif"
        className="scissors"
      />
    ) : (
      <div className="BusinessPage">
        <Title title={business.businessObj.businessname} />

        <select onChange={changeHandler}>
          <option vale="">--Month--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        {selectVal == null ? (
          <img
            src="https://media2.giphy.com/media/1dH0xIDSToAtZYwf8D/giphy.gif"
            className="scissors"
          />
        ) : msg ? (
          <h2 className="msg">{msg}</h2>
        ) : (
          <div className="days">
            <div className="days-names">
              {[0, 1, 2, 3, 4, 5, 6].map((elem) => {
                return <div className="square">{daysObj[day1 + elem]}</div>;
              })}
            </div>
            {days.map((day, i) => {
              return (
                <DayBoxBus
                  key={i}
                  businessId={businessId}
                  month={selectVal}
                  isworking={day.isworking}
                  daynum={day.daynum}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default BusAppointments;
