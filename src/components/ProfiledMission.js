import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMission } from '../redux/missisonSlice';
import MissionSwitch from './MissionSwitch';

import '../styles/myprofile.scss';

const ProfiledMission = () => {
  const { mission } = useSelector(selectMission);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (mission.length > 0) setData(mission.filter((item) => item.reserved === true));
  }, [mission]);

  return (
    <div className="mis-profile">
      <h2>My Missions</h2>
      <div className="mis-col">
        {data.length > 0 ? (
          data.map(((item) => (
            <div
              key={item.mission_id}
              data-testid={`mission-${item.mission_id}`}
              className="mis-data"
            >
              <h3>{item.mission_name}</h3>
              <div>
                <MissionSwitch status={item.reserved} type="button" itemId={item.mission_id} />
              </div>
            </div>
          )))
        ) : (
          <div className="mis-none">
            currently no mission
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfiledMission;
