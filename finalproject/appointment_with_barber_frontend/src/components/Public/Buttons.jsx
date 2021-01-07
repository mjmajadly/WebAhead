import React from "react";
import "./Buttons.css";
const Buttons = (props) => {
  return (
    <button className="btn">
      <div> {props.text} </div>
    </button>
  );
};

export default Buttons;
