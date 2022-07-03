import React from "react";
import "./SideBar.css";

const SideBar = ({ toggleMenu, toggle }) => {
  return (
    <div className={`sidebar ${toggle}`} onClick={(e) => toggleMenu()}>
      <ul className="menu">
        <li>
          <a href="#Home " onClick={(e) => toggleMenu()}>
            Home
          </a>
        </li>

        <li>
          <a href="#services" onClick={(e) => toggleMenu()}>
            Services
          </a>
        </li>
        <li>
          <a href="#work" onClick={(e) => toggleMenu()}>
            Work
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={(e) => toggleMenu()}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
