import React from "react";
import "./GoalPage.css";
import { TbFileSymlink } from "react-icons/tb";
import goalApp from "./project/goalapp2.png";
import { BsGithub } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";

import goalDemo from "./videos/goalApps.mp4";
const GoalPage = () => {
  return (
    <div className="goalPage">
      <div className="goalPageContainer">
        <div className="goalPageCard">
          <button className="goalPageTitle">Goal App</button>
          <div className="goalCardContent">
            <div className="goalCardImage">
              {/* <video
                className="image"
                src={goalDemo}
                autoPlay
                loop
                muted
              ></video> */}
              <img className="image" src={goalApp} alt="Goal app" />
            </div>

            <div className="goalCardInfo">
              <div className="goalStack">
                <span style={{ color: "white" }}>Tech Stack :</span>

                <ul>
                  <li>JAVASCRIPT</li>
                  <li>REACTJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>BOOTSTRAP</li>
                  <li>FIREBASE</li>
                </ul>
              </div>
              <p>
                In this project, I recreated goals landing page and even added
                search date function
              </p>
              <div className="goalLinks">
                <a
                  className={`goal_Link`}
                  style={{ marginRight: "17px" }}
                  href="https://murmuring-thicket-98899.herokuapp.com/"
                  target="_blank"
                >
                  <TbFileSymlink style={{ marginRight: "3px" }} />
                  Live Link to project
                </a>
                <a
                  className={`goal_Link`}
                  style={{ marginRight: "17px" }}
                  href="https://github.com/Jefferyjasmin/mentorship"
                  target="_blank"
                >
                  <BsGithub style={{ marginRight: "2px" }} /> GitHub-Link
                </a>
              </div>
              <button
                className="btn btn-priamry"
                style={{
                  width: "30%",
                  alignSelf: "center",
                  marginTop: "8%",
                  marginBottom: "4%",
                }}
              >
                {" "}
                <a href="/" style={{ textDecoration: "none" }}>
                  <SiHomebridge
                    style={{
                      color: "hsl(0deg 0% 99% / 63%);",
                      height: "30px",
                      width: "30px",
                    }}
                  />{" "}
                  <span style={{ fontSize: "10px" }}>Home</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalPage;
