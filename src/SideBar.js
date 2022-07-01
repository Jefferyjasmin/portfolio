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
          <a href="#" onClick={(e) => toggleMenu()}>
            About
          </a>
        </li>
        <li>
            <a href="#" onClick={(e) => toggleMenu()}>
            Services
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => toggleMenu()}>
            Work
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => toggleMenu()}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
