import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Hi, Im some other page
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
