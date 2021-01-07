import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";

const Menu = (props) => {
  const logOut = () => {
    localStorage.removeItem("userObj");
    localStorage.removeItem("access_token");
    props.setUser({});
    // setUser({});
    toast.error("Good Bye", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    props.setState(false);
    props.setIsLoggedIn(false);
  };

  const hide = () => {
    props.setState(false);
  };

  return (
    <div className="menu">
      <div className="topmenusection">
        {" "}
        <img
          src="/img/menu.svg"
          className="menubaricon"
          onClick={props.menuClick}
        ></img>
      </div>
      {props.isLoggedIn ? (
        <ul>
          <NavLink className="navlink" to="/editprofile" onClick={hide}>
            <li className="menuComponent">Profile</li>
          </NavLink>

          <NavLink className="navlink" to="/myfavorites" onClick={hide}>
            <li className="menuComponent">Favorite Shops</li>
          </NavLink>

          <NavLink className="navlink" to="/myappointments" onClick={hide}>
            <li className="menuComponent">My Appointments</li>
          </NavLink>

          <NavLink className="navlink" to="/mybusinesses" onClick={hide}>
            {props.isBusinessOwner ? (
              <li className="menuComponent">My Businesses</li>
            ) : null}
          </NavLink>

          <NavLink className="navlink" to="/login" onClick={logOut}>
            <li className="menuComponent"> Log Out</li>
          </NavLink>
        </ul>
      ) : (
        <ul>
          <NavLink className="navlink" to="/" onClick={hide}>
            <li className="menuComponent">Login</li>
          </NavLink>

          <NavLink class="navlink" to="/signup" onClick={hide}>
            <li className="menuComponent">Signup</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Menu;
