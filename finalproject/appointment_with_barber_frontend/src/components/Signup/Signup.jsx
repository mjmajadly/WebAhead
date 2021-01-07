import React, { useState } from "react";
import { toast } from "react-toastify";
import "./signup.css";
import { useHistory } from "react-router-dom";
//functions imports
import api from "../api/api";

//components
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";

//Login component
const Signup = () => {
  //states
  const history = useHistory();
  const [objToSend, setObjToSend] = useState({
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
    pass: "",
    isBusinessOwner: false,
  });

  const localServer = `http://localhost:4000/`;

  //functions
  const onChangeHandler = (e) => {
    const val = e.target.value;
    switch (e.target.id) {
      case "email":
        setObjToSend({ ...objToSend, email: val });
        break;
      case "phonenumber":
        setObjToSend({ ...objToSend, phone: val });
        break;
      case "firstname":
        setObjToSend({ ...objToSend, firstname: val });
        break;
      case "lastname":
        setObjToSend({ ...objToSend, lastname: val });
        break;
      case "password":
        setObjToSend({ ...objToSend, pass: val });
        break;
      case "business":
        setObjToSend({ ...objToSend, isBusinessOwner: true });
        // console.log("business");
        break;
      case "client":
        setObjToSend({ ...objToSend, isBusinessOwner: false });
        // console.log("client");
        break;
    }
  };
  // console.log(objToSend);
  //functions
  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();

    api("signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objToSend),
    })
      .then((respone) => {
        if (respone.message) {
          history.push("/login");
        } else {
          toast.error(respone, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((err) => console.error(err));

    // fetch(`${localServer}signup`, {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(objToSend),
    // })
    //   .then((response) => response.json())
    //   .then((obj) => {
    //     console.log("objeect:  ", obj);
    //     if (obj.message) {
    //       history.push("/login");
    //     } else {
    //       toast.error(obj, {
    //         position: toast.POSITION.BOTTOM_CENTER,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <div className="signup">
      <Title title="Sign Up" />
      <form onSubmit={onSubmitHandler}>
        <Inputs
          type="email"
          id="email"
          name="waytologin"
          placeholder="Email"
          icon="img/user.svg"
          alt="user"
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder="Phone number"
          icon="img/phone-call.svg"
          alt="phonenumber"
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First name"
          icon="img/identification.svg"
          alt="firstname"
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name"
          icon="img/identification.svg"
          alt="lastname"
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

        <fieldset>
          <legend>Register as</legend>
          <label htmlFor="business">Business</label>
          <input
            type="radio"
            name="register"
            id="business"
            value=""
            onChange={onChangeHandler}
          />
          <label htmlFor="client">Client</label>
          <input
            type="radio"
            name="register"
            id="client"
            value=""
            onChange={onChangeHandler}
          />
        </fieldset>
        <Buttons className="button" text="Sign up" />
      </form>
    </div>
  );
};

export default Signup;
