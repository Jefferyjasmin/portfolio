import React, { useState } from "react";
import "./Toggle.css";
const Toggle = ({ toggleMenu, toggle }) => {
  return (
    <div className={`toggle ${toggle}`} onClick={(e) => toggleMenu()}></div>
  );
};

export default Toggle;
