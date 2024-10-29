import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops! Page not found</h2>
      <button onClick={() => window.location.href = '/'}>Go Back Home</button>
    </div>
  );
};

export default NotFound;
