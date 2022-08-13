import React from "react";
import AirBnb from "./project/AirBnb.png";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { GoFileSymlinkDirectory } from "react-icons/go";
import goalapp1 from "./project/goalapp1.png";
import "./Card.css";
const Card = ({ title, description, images, github, liveLink }) => {
  return (
    <div className="cardBody">
      <h2>{title}</h2>
      <div className="card">
        <div className="imgBox">
          <img className="projectImage" src={images} alt="" />
          <img className="projectImage" src={goalapp1} alt="" />
        </div>

        <div className="details">
          <h2>
            front-end project
            <br />{" "}
            <span>
              <p>
                <small>{description}</small>
              </p>
            </span>
          </h2>
          <div className="content">
            <div className="social-icons">
              <span>Link to project</span>
              <a href={liveLink}>
                <GoFileSymlinkDirectory />
              </a>

              <span>Git hub repository</span>
              <a href={github}>
                <BsGithub />
              </a>
            </div>
            <div className="textStack">
              <ul>
                <li>JavaScript</li>
                <li>JavaScript</li>
                <li>JavaScript</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
