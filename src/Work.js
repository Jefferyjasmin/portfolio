import React, { useEffect, useState } from "react";
import "./Work.css";
import project1 from "./project/devconnect.png";
import chatbox from "./project/chatapp.png";
import AirBnb from "./project/AirBnb.png";
import Contact from "./Contact";
import Banner from "./Banner";
const Work = () => {
  const [bgd, setBgd] = useState("Dark");
  const [toggle, setToggle] = useState("");
  useEffect(() => {
    if (bgd === "Dark") {
      setToggle("btn btn-dark");
    } else {
      setToggle("btn btn-primary");
    }
  }, [bgd]);
  let lightOrDark = () => {
    if (bgd === "Dark") {
      setBgd("");
      setToggle("btn btn-primary");
    } else {
      setBgd("Dark");
      setToggle("btn btn-dark");
    }
  };
  return (
    <div className={`work ${bgd}`} id="/work">
      <div className="title">
        <div className="navbar">
          <div className="nav_bar_container">
            <button className={`${toggle}`}>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Home
              </a>
            </button>
            <button
              className={`${toggle} Mobile`}
              onClick={(e) => lightOrDark()}
            >
              {bgd === "Dark" ? "DarkMode" : "LightMode"}
            </button>
          </div>
        </div>
        <h2> RECNT WORK</h2>
        <p>Here are a few projects that I have worked on</p>
      </div>
      <div className="container">
        <div className="project">
          <div className={`left ${bgd}`}>
            <h4>Developer Connect</h4>
            <img
              src={project1}
              alt=""
              style={{ height: "244px", width: "356px", objectFit: "cover" }}
            />
            <div className="middle" style={{ display: "flex" }}>
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
              <a href="https://murmuring-thicket-98899.herokuapp.com/">
                Live Link to project
              </a>
            </h2>
            <h2>
              <a href="https://github.com/Jefferyjasmin/mentorship">
                GitHub Link
              </a>
            </h2>
            <p>
              This a project I started to connect new developers to sr
              developers in an attempt to help developers like my self to find
              mentors to help each other down the path of becoming a developer
              and possible avoid making some mistakes
            </p>
          </div>
        </div>
        <div className="project">
          <div className={`left ${bgd}`}>
            <h4>The Chat Box</h4>
            <img
              src={chatbox}
              alt=""
              style={{ height: "244px", width: "356px", objectFit: "cover" }}
            />
            <div className="middle" style={{ display: "flex" }}>
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
              <a href="https://discord-clone-f4d6f.web.app/">
                Live Link to project
              </a>
            </h2>
            <h2>
              <a href="https://github.com/Jefferyjasmin/discord-clone">
                GitHub Link
              </a>
            </h2>

            <p>
              Here is a full stack application where you can create you own
              chart room chat with friends and family and I did use firebase
            </p>
          </div>
        </div>
        <div className="project">
          <div className={`left ${bgd}`}>
            <h4>AirBnb Clone</h4>
            <img
              src={AirBnb}
              alt=""
              style={{ height: "244px", width: "356px", objectFit: "cover" }}
            />
            <div className="middle" style={{ display: "flex" }}>
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
              <a href="https://airbnb-clone-bd9ea.firebaseapp.com/">
                Live Link to project
              </a>
            </h2>
            <h2>
              <a href="https://github.com/Jefferyjasmin/airbnbclone">
                GitHub Link
              </a>
            </h2>
            <p>
              this is a front-end project where I re-created AirBnb my verison
              of the their landing page this site being so popular it was alot
              of fun
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
