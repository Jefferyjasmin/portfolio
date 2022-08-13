import React from "react";
import "./DevPage.css";
import { TbFileSymlink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import project1 from "./project/devconnect.png";
import demo from "./videos/devConnect.mp4";
const Devpage = () => {
  return (
    <div className="devPage">
      <div className="devPageContainer">
        <div className="devPageCard">
          <button className="devPageTitle">Developer connect</button>
          <div className="devCardContent">
            <div className="devCardImage">
              {/* <video className="image" src={demo} autoPlay loop muted></video> */}
              <img className="image" src={project1} alt="Dev Connect" />
            </div>

            <div className="devCardInfo">
              <div className="devStack">
                <span style={{ color: "white" }}>Tech Stack :</span>

                <ul>
                  <li>JAVASCRIPT</li>
                  <li>REACTJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>BOOTSTRAP</li>
                  <li>NODEJS</li>
                  <li>EXPRESS</li>
                  <li>MONGODB</li>
                </ul>
              </div>
              <p>
                In this project user can create profiles , login and out, also
                has protected routes, use jwt webtokens to hash passowrds and
                bcrypt , create comments like another users comments and more.
                this project is designed to connect Developer, exchange ideas
                and helpful tips.
              </p>
              <div className="devLinks">
                <a
                  className={`dev_Link`}
                  style={{ marginRight: "17px" }}
                  href="https://murmuring-thicket-98899.herokuapp.com/"
                  target="_blank"
                >
                  <TbFileSymlink style={{ marginRight: "3px" }} />
                  Live Link to project
                </a>
                <a
                  className={`dev_Link`}
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
                  border: "1px  hsl(217deg 74% 51%) solid",
                  width: "30%",
                  alignSelf: "center",
                  marginTop: "8%",
                  marginBottom: "4%",
                }}
              >
                {" "}
                <a href="/" style={{ textDecoration: "none" }}>
                  <SiHomebridge /> Home
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devpage;
