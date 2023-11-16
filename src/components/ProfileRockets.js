import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReserve } from '../redux/rocketSlice';
import '../styles/profileRocket.scss';

const ProfileRocket = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);
  const dispatch = useDispatch();
  const handleToggleReserve = (rocketId) => {
    dispatch(toggleReserve(rocketId));
  };

  return (
    <div id="rocket-filter">
      <h2>My Rockets</h2>
      {reservedRockets.length < 1 ? (
        <h3>Currently No Rockets Reserved</h3>
      ) : (
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <h3>{rocket.name}</h3>
              <button
                onClick={() => handleToggleReserve(rocket.id)}
                className="cn"
                type="button"
              >
                Cancel Reservation
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileRocket;
