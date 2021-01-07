import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Card.css';
//functions imports
import api from '../api/api';
const Card = ({
  businessName,
  location,
  avg,
  apCard,
  bsCard,
  month,
  day,
  hour,
  id,
  user,
  geolocation,
  businessAddress,
  ownerFirstName,
  ownerLastName,
  phone,
  setUser,
}) => {
  //states
  //fuctions
  const favToggle = (e) => {
    if (e.target.classList.contains('empty')) {
      e.target.src = 'img/filledstar.svg';
      e.target.classList.remove('empty');
      api('favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify({
          businessId: String(id),
        }),
      })
        .then((favorites) => {
          // console.log("PARSED RESPONSEEEE AFTER Add: ", favorites);
          let userObj = JSON.parse(localStorage.getItem('userObj'));
          userObj.myFavorites = favorites.myfavorites;
          localStorage.setItem('userObj', JSON.stringify(userObj));
          setUser(userObj);
        })
        .catch((err) => console.error(err));
    } else {
      e.target.src = 'img/emptystar.svg';
      e.target.classList.add('empty');
      api('favorites', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify({
          businessId: String(id),
        }),
      })
        .then((favorites) => {
          // console.log("PARSED RESPONSEEEE AFTER DELETE: ", favorites);
          let userObj = JSON.parse(localStorage.getItem('userObj'));
          userObj.myFavorites = favorites.myfavorites;
          localStorage.setItem('userObj', JSON.stringify(userObj));
          setUser(userObj);
        })
        .catch((err) => console.error(err));
    }
  };

  const deleteAppointment = () => {
    api('appointment', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        day: month + '/' + day,
        hour: hour,
        businessId: id,
      }),
    })
      .then((appointments) => {
        // console.log("PARSED RESPOOOONSE: ", appointments);
        let userObj = JSON.parse(localStorage.getItem('userObj'));
        // console.log("after extracting from local storage(parsed): ", userObj);
        userObj.myAppointments = appointments.myappointments;

        // console.log("after updating from local storage(parsed): ", userObj);
        // console.log("stringified: ", JSON.stringify(userObj));
        localStorage.setItem('userObj', JSON.stringify(userObj));
        setUser(userObj);
      })
      .catch((err) => console.error(err));
  };

  {
    return !apCard && !bsCard ? (
      <div className='card'>
        <NavLink exact to={`businesspage/${id}`}>
          {/* <Link path={`/Profile/${item.id}`} params={{id: item.id}}>  */}{' '}
          <img
            className='profile-pic'
            src='https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg'
            alt=''
          />
        </NavLink>
        <NavLink exact to={`businesspage/${id}`}>
          <h3 className='business-name'>{businessName}</h3>
        </NavLink>
        <img className='location-icon' src='img/location.svg' />
        <h3 className='location'>{location}</h3>
        <h3 className='avg'>{avg}/5</h3>
        {user.myFavorites && user.myFavorites.indexOf(String(id)) == -1 ? (
          <img
            className='favorite-icon empty'
            src='img/emptystar.svg'
            alt=''
            onClick={favToggle}
          />
        ) : (
          <img
            className='favorite-icon '
            src='img/filledstar.svg'
            alt=''
            onClick={favToggle}
          />
        )}

        <div className='edge'></div>
      </div>
    ) : bsCard ? (
      // !user ? (
      // <img
      //   src="https://media2.giphy.com/media/1dH0xIDSToAtZYwf8D/giphy.gif"
      //   className="scissors"
      // />
      // ) : (
      // <h1 className="loading">Loading</h1>
      <div className='bs-card'>
        <NavLink exact to={`businesspage/${id}`}>
          {' '}
          <img
            className='profile-pic'
            src='https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg'
            alt='profile picture'
          />
        </NavLink>
        <NavLink exact to={`businesspage/${id}`}>
          <h3 className='owner-name'>
            {ownerFirstName[0].toUpperCase()}
            {ownerFirstName.slice(1)} {ownerLastName[0].toUpperCase()}
            {ownerLastName.slice(1)}
          </h3>
        </NavLink>
        <h3 className='business-address'>
          {businessAddress[0].toUpperCase()}
          {businessAddress.slice(1)}
        </h3>
        <img className='location-icon' src='/img/location.svg' />
        <h3 className='phone'>{phone}</h3>
        <img className='phone-icon' src='/img/phone-call.svg' />
        {/* {user.myFavorites.indexOf(String(id)) == -1 ? (
            <img
              className="favorite-icon empty"
              src="img/emptystar.svg"
              alt=""
              onClick={favToggle}
            />
          ) : (
            <img
              className="favorite-icon "
              src="img/filledstar.svg"
              alt=""
              onClick={favToggle}
            />
          )} */}
      </div>
    ) : (
      // )
      <div className='fav-card'>
        <NavLink exact to={`businesspage/${id}`}>
          {' '}
          <img
            className='profile-pic'
            src='https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg'
            alt='profile picture'
          />
        </NavLink>
        <NavLink exact to={`businesspage/${id}`}>
          <h3 className='business-name-fav'>{businessName}</h3>
        </NavLink>
        <h3 className='time'>
          {month[0].toUpperCase() + month.slice(1, 3)}, {day}, {hour}
        </h3>
        <img
          className='delete-icon'
          src='img/trash.svg'
          alt='delete'
          onClick={deleteAppointment}
        />
        {/* <img className="edit-icon" src="img/edit.svg" alt="edit" /> */}
        <div className='edge'></div>
      </div>
    );
  }
};

export default Card;
