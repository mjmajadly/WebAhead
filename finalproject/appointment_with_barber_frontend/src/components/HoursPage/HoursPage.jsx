import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./HoursPage.css";
//functions imports
import api from "../api/api";

//components imports
import HourBox from "../Public/HourBox";

//we will get something like this in the page address: http://localhost:4000/hourspage/:daynum/:month/

const HoursPage = () => {
  //states
  const [changes, setChanges] = useState(1);
  const [emptyHoursArr, setEmptyHoursArr] = useState([]);
  const dayNum = window.location.pathname.split("/")[2];
  const month = window.location.pathname.split("/")[3];
  const businessId = window.location.pathname.split("/")[4];
  const calendarName = month + "_" + businessId;
  const calendarNameToSend =
    month +
    "/" +
    dayNum; /*here is the error, we were sending +businessID and not +dayNum (in line 18)*/

  // console.log("dayNum: ", dayNum);
  // console.log("month: ", month);
  // console.log("business id: ", businessId);
  // console.log("calendar name: ", calendarName);
  // console.log("STATESTATE: ", emptyHoursArr);
  //functions
  //this function returns the sum of an hour plus minutes
  const addMinutesToHour = (hour, minutes) => {
    let minutesInHour = hour.split(":")[1];
    let onlyHour = hour.split(":")[0];
    //converting the given minutes to hours
    let minutesToHours = parseInt(minutes / 60);
    let remainingMinutes = minutes % 60 > 0 ? minutes % 60 : minutes;
    let finalTime;
    if (minutesToHours >= 1) onlyHour = parseInt(onlyHour) + minutesToHours;

    const minutesSum = parseInt(minutesInHour) + remainingMinutes;
    if (minutesSum >= 60) {
      onlyHour++;
      let finalMinutes = minutesSum - 60;
      finalTime = onlyHour + ":" + String(finalMinutes).padStart(2, "0");
    } else {
      finalTime = onlyHour + ":" + String(minutesSum).padStart(2, "0");
    }
    return finalTime;
  };

  //useEffect (to get the calendar for that business in the given month)
  useEffect(() => {
    api(`calendar/${calendarName}`, {
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((calendar) => {
        // console.log("THE CALENDAR IS: ", calendar);
        const wantedDay = calendar.filter((day) => day.daynum == dayNum)[0];
        const workingHours = JSON.parse(wantedDay.workinghours);
        const appointments = JSON.parse(wantedDay.appointments);
        const diff = wantedDay.diff;
        // const diff = 30;
        const emptyHoursArr = [];
        if (!appointments) {
          for (let i = 0; i < workingHours.length; i++) {
            let start = workingHours[i].start;
            while (
              Date.parse(`01/01/2011 ${start}`) <
              Date.parse(`01/01/2011 ${workingHours[i].end}`)
            ) {
              console.log("empty hours array(before): ", emptyHoursArr);
              emptyHoursArr.push(start);
              console.log("empty hours array(after): ", emptyHoursArr);

              start = addMinutesToHour(start, diff);
            }
          }
        } else {
          for (let i = 0; i < workingHours.length; i++) {
            let start = workingHours[i].start;
            // console.log(i, start);
            let ok = true;
            while (
              Date.parse(`01/01/2011 ${start}`) <
              Date.parse(`01/01/2011 ${workingHours[i].end}`)
            ) {
              for (let i = 0; i < appointments.length; i++) {
                // console.log(i, start, appointments[i].hour);

                if (
                  Date.parse(`01/01/2011 ${appointments[i].hour}`) ==
                  Date.parse(`01/01/2011 ${start}`)
                ) {
                  // console.log("taken, and the hour is: ", appointments[i]);
                  // console.log(i);
                  ok = false;
                }
              }
              if (ok) {
                console.log("OKKKKK");
                console.log("2 empty hours array(before): ", emptyHoursArr);
                emptyHoursArr.push(start);
                console.log("2 empty hours array(after): ", emptyHoursArr);
              }
              ok = true;
              start = addMinutesToHour(start, diff);
            }
          }
        }
        setEmptyHoursArr(emptyHoursArr);
      })
      .catch((err) => console.error(err));
  }, [changes]);

  console.log("empty hours array: ", emptyHoursArr);

  return emptyHoursArr.length == 0 ? (
    <HourBox full={true} />
  ) : (
    <div className="HoursPage">
      <h1 className="date">
        {dayNum}, {month[0].toUpperCase()}
        {month.slice(1)}
      </h1>
      <div className="hours">
        {emptyHoursArr.map((hour, i) => {
          return (
            <HourBox
              setChanges={setChanges}
              key={uuid()}
              hour={hour}
              calendarName={calendarNameToSend}
              businessId={businessId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HoursPage;
