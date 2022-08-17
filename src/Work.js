import React, { useEffect, useState } from "react";
import "./Work.css";
import { TbFileSymlink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import project1 from "./project/devconnect.png";

import AirBnb from "./project/AirBnb.png";
import goalapp1 from "./project/goalapp1.png";
import Contact from "./Contact";
import Aos from "aos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";

import Banner from "./Banner";
const Work = () => {
  const [bgd, setBgd] = useState("Dark");
  const [toggle, setToggle] = useState("");
  const [light, setLight] = useState("");

  // let toggleMenu = () => {
  //   if (toggle === "") {
  //     setToggle("active");
  //   } else setToggle("");
  // };
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

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <>
      <Banner />
      <div className={`work ${bgd}`} id="/work">
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
          {/* <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        > */}

          <div
            data-aos="flip-down"
            className="project"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "3%",
            }}
          >
            <div id="/developerconnect" className={`left ${bgd}`}>
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
            <div id="/goalapp" className={`left ${bgd}`}>
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

          <div
            data-aos="flip-left"
            className="project"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "3%",
            }}
          >
            <div id="/airbnbclone" className={`left ${bgd}`}>
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

          {/* </Carousel> */}
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
