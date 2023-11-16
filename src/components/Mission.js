import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMission, setMission, markHasFetched,
} from '../redux/missisonSlice';
import Indicator from './Indicator';
import MissionSwitch from './MissionSwitch';

import '../styles/mission.scss';

const Mission = () => {
  const dispatch = useDispatch();
  const { mission, hasFetched } = useSelector(selectMission);

  useEffect(() => {
    const fetchMission = () => {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error();
        })
        .then((data) => {
          dispatch(markHasFetched());
          dispatch(setMission(data));
        })
        .catch((err) => err.message);
    };
    if (mission.length === 0) fetchMission();
  }, [dispatch, mission.length]);

  if (!hasFetched) {
    return (
      <div className="indicator-container">
        <Indicator />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="sub-main">
        <table>
          <thead>
            <tr>
              <th id="mission">Mission</th>
              <th id="desc">Description</th>
              <th id="stats">Status</th>
              <th id="action" aria-label="action-button" />
            </tr>
          </thead>
          <tbody>
            {mission.map((item) => (
              <tr key={item.mission_id} className="data-info">
                <td data-testid={item.mission_id} id="mis-name">
                  {item.mission_name}
                </td>
                <td>
                  {item.description}
                </td>
                <td>
                  <MissionSwitch status={item.reserved} type="badge" itemId={item.mission_id} />
                </td>
                <td>
                  <div id="mis-button">
                    <MissionSwitch status={item.reserved} type="button" itemId={item.mission_id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mission;
