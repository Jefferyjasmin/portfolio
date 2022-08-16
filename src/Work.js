import React, { useEffect, useState } from "react";
import "./Work.css";
import { TbFileSymlink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import project1 from "./project/devconnect.png";
import chatbox from "./project/chatapp.png";
import AirBnb from "./project/AirBnb.png";
import goalapp1 from "./project/goalapp1.png";
import Contact from "./Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Banner from "./Banner";
const Work = () => {
  const [bgd, setBgd] = useState("Dark");
  const [toggle, setToggle] = useState("");
  const [light, setLight] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    if (bgd === "Dark") {
      setToggle("btn btn-dark");
      setLight("");
    } else {
      setToggle("btn btn-primary");
      setLight("Light");
    }
  }, [bgd]);

  let lightOrDark = () => {
    if (bgd === "Dark") {
      setBgd("");
      setLight("Light");
      setToggle("btn btn-primary");
    } else {
      setLight("");
      setBgd("Dark");
      setToggle("btn btn-dark");
    }
  };

  return (
    <>
      <Banner />
      <div className={`work ${bgd}`}>
        <div className="work_title">
          <h2> RECENT WORK</h2>
          <p>Here are a few projects that I have worked on</p>
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
        </div>
        <div className="work_container">
          <div
            data-aos="flip-down"
            className="project"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "3%",
            }}
          >
            <div className={`left ${bgd}`}>
              <h4>Developer Connect</h4>
              <img className="projectImage" src={project1} alt="" />
              <div className="middle">
                <div className="middleContent">
                  <h2>Description</h2>
                  <p className="middleContent_P">
                    In this project user can create profiles , login and out ,
                    create comments like another users comments and more. this
                    project is designed to connect Developer, exchange ideas and
                    helpful tips.
                  </p>
                  <div className="middleContentLinks">
                    <a
                      className={`work_tag ${light}`}
                      href="https://murmuring-thicket-98899.herokuapp.com/"
                      target="_blank"
                      style={{ marginRight: "13px" }}
                    >
                      <TbFileSymlink style={{ marginRight: "3px" }} />
                      Live Link to project
                    </a>
                    <a
                      className={`work_tag ${light}`}
                      href="https://github.com/Jefferyjasmin/mentorship"
                      target="_blank"
                    >
                      <BsGithub style={{ marginRight: "3px" }} /> GitHub-Link
                    </a>
                  </div>
                  <button className=" btn btn-primary projectButton">
                    <a href="develperconnect">More info</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <div
            data-aos="flip-right"
            className="project"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "4%",
            }}
          >
            <div className={`left ${bgd}`}>
              <h4>GOAL APP</h4>
              <img className="projectImage" src={goalapp1} alt="" />
              <div className="middle">
                <div className="middleContent">
                  <h2>Description</h2>
                  <p className="middleContent_P">
                    In this project user can create profiles , login and out ,
                    create future goals , with protected routes. this is full
                    stack applications
                  </p>
                  <div className="middleContentLinks">
                    <a
                      className={`work_tag ${light}`}
                      href="https://jefferygoalapp.herokuapp.com/login"
                      target="_blank"
                      style={{ marginRight: "13px" }}
                    >
                      <TbFileSymlink style={{ marginRight: "3px" }} />
                      Live Link to project
                    </a>
                    <a
                      className={`work_tag ${light}`}
                      href="https://github.com/Jefferyjasmin/jefferygoalapp"
                      target="_blank"
                      style={{ marginRight: "13px" }}
                    >
                      <BsGithub style={{ marginRight: "3px" }} /> GitHub-Link
                    </a>
                  </div>
                  <button className=" btn btn-primary projectButton">
                    <a href="goal">More info</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* section */}

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
          <div
            data-aos="flip-left"
            className="project"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "3%",
            }}
          >
            <div className={`left ${bgd}`}>
              <h4>AirBnb Clone</h4>
              <img className="projectImage" src={AirBnb} alt="" />
              <div className="middle">
                <div className="middleContent">
                  <h2>Description</h2>
                  <p className="middleContent_P">
                    In this project user can create profiles , login and out ,
                    create future goals , with protected routes. this is full
                    stack applications
                  </p>
                  <div className="middleContentLinks">
                    <a
                      className={`work_tag ${light}`}
                      href="https://clone-9a863.web.app/"
                      target="_blank"
                      style={{ marginRight: "13px" }}
                    >
                      <TbFileSymlink style={{ marginRight: "3px" }} />
                      Live Link to project
                    </a>

                    <a
                      className={`work_tag ${light}`}
                      href="https://github.com/Jefferyjasmin/airbnbclone"
                      target="_blank"
                      style={{ marginRight: "13px" }}
                    >
                      <BsGithub style={{ marginRight: "3px" }} /> GitHub-Link
                    </a>
                  </div>
                  <button className=" btn btn-primary projectButton">
                    <a href="amazon">More info</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* section */}

          {/* <div data-aos="flip-left" className="project">
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
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>firebase</li>
                  <li>mobile-responsive</li>
                </ul>
              </div>
            </div>
            <div className={`right ${bgd} rightSecond`}>
              <h2>
                <a
                  className={`work_tag ${light}`}
                  href="https://clone-9a863.web.app/"
                  target="_blank"
                >
                  Live Link to project
                </a>
              </h2>
              <h2>
                <a
                  className={`work_tag ${light}`}
                  href="https://github.com/Jefferyjasmin/airbnbclone"
                  target="_blank"
                >
                  GitHub Link
                </a>
              </h2>
              <p>
                In this front-end project , I choose to re-create Airbnb to
                excersize more of my css skill and adopt modern practices, I
                hope you enjoy
              </p>
            </div>
          </div> */}
        </div>
        <div
          className="div"
          style={{ height: "75px", background: "#111" }}
        ></div>
        <Contact bgd={bgd} lightOrDark={lightOrDark} />
      </div>
    </>
  );
};

export default Work;
