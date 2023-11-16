import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Notfound.scss';

const NotFound = () => (
  <div id="notFound">
    <h1>Page Not Found</h1>
    <p>The requested page was not found.</p>
    <p>
      <Link to="/">Go to Home</Link>
    </p>
  </div>
);

export default NotFound;
