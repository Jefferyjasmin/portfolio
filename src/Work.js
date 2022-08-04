import React, { useEffect, useState } from "react";
import "./Work.css";
import project1 from "./project/devconnect.png";
import chatbox from "./project/chatapp.png";
import AirBnb from "./project/AirBnb.png";
import goalapp1 from "./project/goalapp1.png";
import goalapp2 from "./project/goalapp2.png";
import goalapp3 from "./project/goalapp3.png";
import Contact from "./Contact";
import Aos from "aos";
import "aos/dist/aos.css";
const Work = ({ bgd, toggle, light, lightOrDark, setToggle, setLight }) => {
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

  const goalImages = [goalapp1, goalapp2, goalapp3];
 
  const goalImagesSwipes = (goalImages) => {
    return goalImages[0];
  };
  /// start 0 right left count up

  console.log("this is the picture ", goalImagesSwipes(goalImages));

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
        <div data-aos="flip-down" className="project">
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
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Express</li>
                <li>node.js</li>
                <li>ES6</li>
                <li>Mongodb</li>
                <li>mobile-responsive</li>
              </ul>
            </div>
          </div>

          <div className={`right ${bgd}`}>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://murmuring-thicket-98899.herokuapp.com/"
                target="_blank"
              >
                Live Link to project
              </a>
            </h2>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://github.com/Jefferyjasmin/mentorship"
                target="_blank"
              >
                GitHub Link
              </a>
            </h2>
            <p>
              In this project user can create profiles , login and out , create
              comments like another users comments and more. this project is
              designed to connect Developer and exchange ideas and trips.
            </p>
          </div>
        </div>

        <div data-aos="flip-right" className="project">
          <div className={`left ${bgd}`}>
            <h4>GOAL APP</h4>
            <img
              src={goalImagesSwipes(goalImages)}
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
                <li>Express</li>
                <li>node.js</li>
                <li>ES6</li>
                <li>Mongodb</li>
                <li>mobile-responsive</li>
              </ul>
            </div>
          </div>

          <div className={`right ${bgd}`}>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://jefferygoalapp.herokuapp.com/"
                target="_blank"
              >
                Live Link to project
              </a>
            </h2>
            <h2>
              <a
                className={`work_tag ${light}`}
                href="https://github.com/Jefferyjasmin/jefferygoalapp"
                target="_blank"
              >
                GitHub Link
              </a>
            </h2>
            <p>
              In this project user can create profiles , login and out , create
              comments like another users comments and more. this project is
              designed to connect Developer and exchange ideas and trips.
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

        <div data-aos="flip-left" className="project">
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
              excersize more of my css skill and adopt modern practices, I hope
              you enjoy
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
