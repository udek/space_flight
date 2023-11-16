import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mission: [],
  hasFetched: false,
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setMission: (state, action) => {
      const data = action.payload.map((item) => {
        const object = {};
        object.mission_id = item.mission_id;
        object.mission_name = item.mission_name;
        object.description = item.description;
        object.wikipedia = item.wikipedia;
        object.reserved = false;
        return object;
      });
      state.mission = data;
    },
    reservedMission: (state, action) => {
      state.mission = state.mission.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: !item.reserved };
      });
    },
    markHasFetched: (state) => {
      state.hasFetched = true;
    },
  },
});

export const { setMission, reservedMission, markHasFetched } = missionSlice.actions;

export const selectMission = (state) => state.mission;

export default missionSlice.reducer;
