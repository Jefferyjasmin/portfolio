import React from "react";
import "./AmazonPage.css";
import { TbFileSymlink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import AirBnb from "./project/AirBnb.png";
import Amademo from "./videos/amazon.mp4";
const AmazonPage = () => {
  return (
    <div className="amazonPage">
      <div className="amazonPageContainer">
        <div className="amazonPageCard">
          <button className="amazonPageTitle">Developer connect</button>
          <div className="amazonCardContent">
            <div className="amazonCardImage">
              <video
                className="image"
                src={Amademo}
                autoPlay
                loop
                muted
              ></video>
            </div>

            <div className="amazonCardInfo">
              <div className="amazonStack">
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
                In this project, I recreated Amazons landing page and even added
                search date function
              </p>
              <div className="amazonLinks">
                <a
                  className={`amazon_Link`}
                  style={{ marginRight: "17px" }}
                  href="https://murmuring-thicket-98899.herokuapp.com/"
                  target="_blank"
                >
                  <TbFileSymlink style={{ marginRight: "3px" }} />
                  Live Link to project
                </a>
                <a
                  className={`amazon_Link`}
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
                      color: "hsl(349deg 74% 51%)",
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

export default AmazonPage;
