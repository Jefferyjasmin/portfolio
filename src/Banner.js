import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="dark-overlay landing-inner ">
        <div className="containers">
          <div className="left">
            <h2 style={{ color: "white" }}> Software Engineer</h2>
            <h3 className="left_content">
              I have a passion for engineering and tackling new projects . I
              love solving real world problems, while bringing ideas to UI
            </h3>
            {/* <button style={{ height: "10%", width: "30%" }}>MY_Profile</button> */}
          </div>
          <div className="right">
            <button className="Resume btn btn-info ">
              <a
                href="https://drive.google.com/file/d/16YHVmxvZxFOCmKkZ9LEVhvonZ8Jsgtn2/view?usp=sharing"
                target="_blank"
              >
                {" "}
                Resume
              </a>
            </button>

            <button className="btn btn-primary profiles">
              <a
                href="/work"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                {" "}
                Profile
              </a>
            </button>
            <button className="btn btn-secondary Github">
              <a
                href="https://github.com/Jefferyjasmin"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                Github
              </a>
            </button>
            <button className="btn btn-info LinkedIn">
              <a
                href="https://www.linkedin.com/in/jefferyjasmin/"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/*Software Engineer, I have a passion for engineering and tackling
new projects . I love solving real world problems, while bringing
ideas to UI*/
