import React from "react";
import "./title.css";
//props icon, placeholder, type
const Title = (props) => {
  return <div className="title">{props.title}</div>;
};

export default Title;
