import React, { useState } from "react";
import { toast } from "react-toastify";
import "./profile.css";
import { useHistory } from "react-router-dom";
import api from "../api/api";

//components
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";
import { logDOM } from "@testing-library/react";
let userObj = JSON.parse(localStorage.getItem("userObj"));
//Login component

const EditProfile = () => {
  //states
  const history = useHistory();
  const [objToSend, setObjToSend] = useState({
    email: userObj.email,
    phone: userObj.phone,
    firstname: userObj.firstname,
    lastname: userObj.lastname,
    isBusinessOwner: userObj.isBusinessOwner,
  });
  const [passObj, setPassObj] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [hidePass, setHidePass] = useState(false);
  const handleHidePass = (e) => {
    setHidePass(!hidePass);
  };

  // console.log(userObj);
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
      case "oldpass":
        setPassObj({ ...passObj, oldPassword: val });
        break;
      case "newpass":
        setPassObj({ ...passObj, newPassword: val });
        break;
    }
  };
  // console.log("halaaaaa", objToSend);
  // console.log("nuwraaasssss", userObj);
  //functions
  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();

    api("updateUser/", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(objToSend),
    })
      .then((response) => {
        if (response.userObj) {
          localStorage.setItem("userObj", JSON.stringify(response.userObj));
          localStorage.setItem("access_token", response.access_token);
          userObj = JSON.parse(localStorage.getItem("userObj"));

          toast.success("Successfully Updated ", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.error(response, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((err) => {
        // console.log("Im in catch");
        console.error(err);
      });

    // fetch(`${localServer}updateUser/`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //     token: localStorage.getItem("access_token"),
    //   },
    //   body: JSON.stringify(objToSend),
    // })

    //   .then((obj) => {
    //     console.log("objeect:  ", obj);

    //     if (obj.userObj) {
    //       localStorage.setItem("userObj", JSON.stringify(obj.userObj));
    //       localStorage.setItem("access_token", obj.access_token);
    //       userObj = JSON.parse(localStorage.getItem("userObj"));

    //       toast.success("Successfully Updated ", {
    //         position: toast.POSITION.BOTTOM_CENTER,
    //       });
    //       console.log("obj1111", obj);
    //     } else {
    //       console.log("obj222", obj);
    //       toast.error(obj, {
    //         position: toast.POSITION.BOTTOM_CENTER,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Im in catch");
    //     console.error(err);
    //   });
  };
  var strongRegex = new RegExp("^(?=.{8,})");
  const onSubmitPassHandler = (e) => {
    e.preventDefault();
    if (!passObj.newPassword.match(strongRegex)) {
      toast.error("Password must contain at least 8 or more characters", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      api("updateUserPassword/", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(passObj),
      })
        .then((response) => {
          if (response.phone) {
            toast.success("Password updated Successfully", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.error(response, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          }
        })
        .catch((err) => console.error(err));

      // fetch(`${localServer}updateUserPassword/`, {
      //   method: "PUT",
      //   headers: {
      //     "content-type": "application/json",
      //     token: localStorage.getItem("access_token"),
      //   },
      //   body: JSON.stringify(passObj),
      // })
      //   .then((res) =>
      //     res.json().then((json) => {
      //       if (json.phone) {
      //         toast.success("Password updated Successfully", {
      //           position: toast.POSITION.BOTTOM_CENTER,
      //         });
      //       } else {
      //         toast.error(json, {
      //           position: toast.POSITION.BOTTOM_CENTER,
      //         });
      //       }
      //       console.log(json);
      //     })
      //   )
      //   .catch((err) => console.log(err));
    }
  };

  return (
    <div className="editProfile">
      <Title title="Profile" />
      <form onSubmit={onSubmitHandler}>
        <Inputs
          type="email"
          id="email"
          name="waytologin"
          placeholder="Email"
          icon="img/user.svg"
          alt="user"
          value={userObj.email}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder="Phone number"
          icon="img/phone-call.svg"
          alt="phonenumber"
          value={userObj.phone}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First name"
          icon="img/identification.svg"
          alt="firstname"
          value={userObj.firstname}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name"
          icon="img/identification.svg"
          alt="lastname"
          value={userObj.lastname}
          onChangeFunc={onChangeHandler}
        />

        <Buttons className="button" text="Save" />
      </form>
      <button className="passchange" onClick={handleHidePass}>
        <div> change password </div>
      </button>
      <form onSubmit={onSubmitPassHandler}>
        {" "}
        {hidePass ? (
          <div>
            <Inputs
              type="password"
              id="oldpass"
              name="oldpass"
              placeholder="Old Password"
              icon="img/password.svg"
              alt="oldpass"
              onChangeFunc={onChangeHandler}
            />
            <Inputs
              type="password"
              id="newpass"
              name="newpass"
              placeholder="New Password"
              icon="img/password.svg"
              alt="newpass"
              onChangeFunc={onChangeHandler}
            />
            <Buttons text="change password" />
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default EditProfile;
