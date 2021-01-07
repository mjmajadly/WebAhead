import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//components imports
import Inputs from "./components/Public/Inputs";
import Title from "./components/Public/Title";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Buttons from "./components/Public/Buttons";
import Card from "./components/Public/Card";
import Login from "./components/Login/Login";
import Businesses from "./components/Businesses/Businesses";
import MyAppointments from "./components/MyAppointments/MyAppointments";
import Signup from "./components/Signup/Signup";
import EditProfile from "./components/EditProfile/profile";
import MyFavorites from "./components/MyFavorites/MyFavorites";
import BusinessPage from "./components/BusinessPage/BusinessPage";
import CreateNewBusiness from "./components/CreateNewBusiness/CreateNewBusiness";
import MyBusinesses from "./components/MyBusinesses/MyBusinesses";
import HoursPage from "./components/HoursPage/HoursPage";
import BusAppointments from "./components/BusAppointments/BusAppointments";
import HoursPageBus from "./components/HoursPageBus/HoursPageBus";
toast.configure();

function App() {
  const [state, setState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // console.log("IS LOGGED IN : ", isLoggedIn);
  // console.log("user in app component is: ", user);
  const menuClick = () => {
    // console.log("clicked!");
    setState(!state);
    // console.log(state);
  };

  // console.log("isLoggedInnnnnnnnnnnn:  ", isLoggedIn);

  //useEffect, checking the local storage to see if the user is logged in
  useEffect(() => {
    const userObj = localStorage.getItem("userObj");
    const access_token = window.localStorage.getItem("access_token");
    if (access_token) {
      setUser(JSON.parse(userObj));
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        username={user.firstname}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        menuClick={menuClick}
      />
      {state == true ? (
        <Menu
          isBusinessOwner={user.isBusinessOwner}
          setUser={setUser}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          menuClick={menuClick}
          setState={setState}
        />
      ) : null}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to="/getbusiness" />
            ) : (
              <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
            )}
          </Route>
          <Route exact path="/getbusiness">
            {isLoggedIn ? (
              <Businesses user={user} setUser={setUser} />
            ) : (
              <Redirect exact to="/login" />
            )}
          </Route>
          <Route exact path="/myappointments">
            {isLoggedIn ? (
              <MyAppointments user={user} setUser={setUser} />
            ) : (
              <Redirect exact to="/login" />
            )}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/editprofile">
            {isLoggedIn ? <EditProfile /> : <Redirect exact to="/login" />}
          </Route>
          <Route exact path="/mybusinesses">
            {isLoggedIn ? (
              <MyBusinesses />
            ) : (
              <Redirect exact to="/mybusinesses" />
            )}
          </Route>
          {/* we hav to remember to correct this route */}
          <Route exact path="/editAddBusiness/:id">
            {isLoggedIn ? <CreateNewBusiness /> : <CreateNewBusiness />}
          </Route>
          <Route exact path="/editAddBusiness">
            {isLoggedIn ? <CreateNewBusiness /> : <CreateNewBusiness />}
          </Route>
          <Route exact path="/myfavorites">
            {isLoggedIn ? (
              <MyFavorites user={user} setUser={setUser} />
            ) : (
              <Redirect exact to="/login" />
            )}
          </Route>
          <Route exact path="/businesspage/:id">
            {isLoggedIn ? (
              <BusinessPage user={user} setUser={setUser} />
            ) : (
              <Redirect exact to="/login" />
            )}
          </Route>

          <Route exact path="/hourspage/:daynum/:month/:businessid">
            {isLoggedIn ? (
              <HoursPage user={user} setUser={setUser} />
            ) : (
              <Redirect exact to="/login" />
            )}
          </Route>

          <Route exact path="/busappointments/:id">
            {isLoggedIn ? <BusAppointments /> : <Redirect exact to="/login" />}
          </Route>

          <Route exact path="/hourspagebus/:daynum/:month/:businessid">
            {isLoggedIn ? <HoursPageBus /> : <Redirect exact to="/login" />}
          </Route>

          <Route render={() => <Redirect to="/login" />} />
          <Title title="LOG IN" />
          <Inputs
            icon="img/profile-user.svg"
            type="email"
            placeholder="email"
          />
          <Buttons text="Login" />
          <Card businessName="cut pro" location="waze://tamra" avg="4.3" />
          <Card
            businessName="perfect cut"
            location="waze://Kafr-Qara"
            avg="4.14"
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
