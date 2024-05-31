import React from 'react';
import './Overlay.css';

const Overlay = ({ closeOverlay }) => {
  return <div className="overlay" onClick={closeOverlay}></div>;
};

export default Overlay;
