import React from 'react';

const PopUp = ({ onClose }) => {
  return (
    <div className="tab-notification">
      <div className="tab-content">
        <p className="tab-text">XDDDDDDDDDDDDDDDDDDD</p>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
    </div>
  );
};

export default PopUp;