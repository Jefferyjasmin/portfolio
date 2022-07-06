import React, { useEffect } from "react";
import "./Work.css";
import project1 from "./project/devconnect.png";
import chatbox from "./project/chatapp.png";
import AirBnb from "./project/AirBnb.png";
import Contact from "./Contact";
const Work = ({ bgd, toggle, light, lightOrDark, setToggle, setLight }) => {
  useEffect(() => {
    if (bgd === "Dark") {
      setToggle("btn btn-dark");
      setLight("");
    } else {
      setToggle("btn btn-primary");
      setLight("Light");
    }
  }, [bgd]);

  return (
    <div className={`work ${bgd}`} id="/work">
      <div className="work_title">
        <div className="navbar">
          <div className="nav_bar_container">
            <button
              className={`${toggle} Mobile`}
              onClick={(e) => lightOrDark()}
            >
              {bgd === "Dark" ? "DarkMode" : "LightMode"}
            </button>
          </div>
        </div>
        <h2> RECENT WORK</h2>
        <p>Here are a few projects that I have worked on</p>
      </div>
      <div className="work_container">
        <div className="project">
          <div className={`left ${bgd}`}>
            <h4>Developer Connect</h4>
            <img
              src={project1}
              alt=""
              style={{ height: "244px", width: "356px", objectFit: "cover" }}
            />
            <div className="middle">
              <h2>Tech stack</h2>
              <ul>
                <li>JavaScript</li>
                <li>Express</li>
                <li>node.js</li>
                <li>React</li>
                <li>Mongodb</li>
              </ul>
            </div>
          </div>

          <div className={`right ${bgd}`}>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://murmuring-thicket-98899.herokuapp.com/"
              >
                Live Link to project
              </a>
            </h2>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://github.com/Jefferyjasmin/mentorship"
              >
                GitHub Link
              </a>
            </h2>
            <p>
              This a project I started to connect new developers to sr.
              developers. in an attempt to help developers like my self to find
              mentors to help each other down the path of becoming a developer.
            </p>
          </div>
        </div>

        {/* <div className="project">
          <div className={`left ${bgd}`}>
            <h4>The Chat Box</h4>
            <img
              src={chatbox}
              alt=""
              style={{ height: "244px", width: "356px", objectFit: "cover" }}
            />
            <div className="middle">
              <h2>Tech stack</h2>
              <ul>
                <li>JavaScript</li>
                <li>Express</li>
                <li>node.js</li>
                <li>React</li>
                <li>firebase</li>
              </ul>
            </div>
          </div>
          <div className={`right ${bgd}`}>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://discord-clone-f4d6f.web.app/"
              >
                Live Link to project
              </a>
            </h2>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://github.com/Jefferyjasmin/discord-clone"
              >
                GitHub Link
              </a>
            </h2>

            <p>
              Here is a fullstack application where you can create you own chart
              room chat with friends and/or family and I did use firebase for
              hosting.
            </p>
          </div>
        </div> */}

        <div className="project">
          <div className={`left ${bgd}`}>
            <h4>AirBnb Clone</h4>
            <img
              src={AirBnb}
              alt=""
              style={{ height: "244px", width: "356px", objectFit: "cover" }}
            />
            <div className="middle">
              <h2>Tech stack</h2>
              <ul>
                <li>JavaScript</li>
                <li>Express</li>
                <li>node.js</li>
                <li>React</li>
                <li>firebase</li>
              </ul>
            </div>
          </div>
          <div className={`right ${bgd}`}>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://clone-9a863.web.app/"
              >
                Live Link to project
              </a>
            </h2>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://github.com/Jefferyjasmin/airbnbclone"
              >
                GitHub Link
              </a>
            </h2>
            <p>
              this is a front-end project where I re-created AirBnb's landing
              page this site being so popular it was alot of fun
            </p>
          </div>
        </div>
      </div>
      <div className="div" style={{ height: "75px", background: "#111" }}></div>
      <Contact bgd={bgd} lightOrDark={lightOrDark} />
    </div>
  );
};

export default Work;
