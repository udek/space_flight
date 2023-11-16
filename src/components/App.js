import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Mission from './Mission';
import Rockets from './Rockets';
import NotFound from './NotFound';
import Myprofile from './Myprofile';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
