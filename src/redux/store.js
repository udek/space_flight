import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketSlice';
import missionReducer from './missisonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
