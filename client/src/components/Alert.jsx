// client/src/components/Alert.jsx

import React from 'react';

const Alert = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="alert">
      {message}
    </div>
  );
};

export default Alert;
