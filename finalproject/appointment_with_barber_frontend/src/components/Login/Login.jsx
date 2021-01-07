import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Login.css";
//functions imports
import api from "../api/api";
//components imports
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";

//Login component
const Login = ({ setIsLoggedIn, setUser }) => {
  //states
  const [objToSend, setObjToSend] = useState({
    pass: "",
  });

  // console.log(objToSend);
  //functions
  const onChangeHandler = (e) => {
    const val = e.target.value;
    if (e.target.type === "password") {
      setObjToSend({ ...objToSend, pass: val });
    } else {
      if (isNaN(val)) {
        setObjToSend({ pass: objToSend.pass, email: val });
      } else {
        setObjToSend({ pass: objToSend.pass, phone: val });
      }
    }
  };

  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();
    api("login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objToSend),
    })
      .then((obj) => {
        // console.log("THE OBJ IS: ", obj);

        if (obj.access_token) {
          toast.success(
            "Welcome " +
              obj.userObj.firstname[0].toUpperCase() +
              obj.userObj.firstname.slice(1),
            {
              position: toast.POSITION.BOTTOM_CENTER,
            }
          );
          setUser(obj.userObj);
          localStorage.setItem("userObj", JSON.stringify(obj.userObj));
          localStorage.setItem("access_token", obj.access_token);
          setIsLoggedIn(true);
        } else {
          toast.error(obj, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className="Login">
      <Title title="LOG IN" />
      <form onSubmit={onSubmitHandler}>
        <Inputs
          type="text"
          id="login-field"
          name="waytologin"
          placeholder="Email/ Phone number"
          icon="img/user.svg"
          alt="user"
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          icon="img/password.svg"
          alt="password"
          onChangeFunc={onChangeHandler}
        />
        <Buttons text="Log In" />
      </form>
    </div>
  );
};

export default Login;
