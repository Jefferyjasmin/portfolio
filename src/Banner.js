import React from "react";

import "./Banner.css";

const Banner = ({ bgd }) => {
  return (
    <div className="banner">
      <div className="dark-overlay landing-inner ">
        <div className="containers">
          <div className={`banner_left `}>
            <div className={`banner_content  `}>
              <h2>Software Engineer</h2>
              <h3 className={`left_content  `}>
                Hi, My name is jeffery jasmin
                <p style={{ marginTop: "20px", fontSize: "1rem" }}>
                  I create interfaces and experiences, love solving real world
                  problems, while bringing ideas to UI
                </p>
              </h3>{" "}
              <span>Front End Develpoment</span> /
              <span>Back End Develpoment</span> /
              <span>FullStack Develpoment</span>
              <div className="banner_right">
                {/* <button className="btn btn-primary profiles">
                  <a
                    href="/work"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    {" "}
                    Profile
                  </a>
                </button> */}
                <button className="Resume btn btn-primary ">
                  <a
                    href="https://drive.google.com/file/d/16YHVmxvZxFOCmKkZ9LEVhvonZ8Jsgtn2/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Resume
                  </a>
                </button>

                <button className="btn btn-primary Github">
                  <a
                    href="https://github.com/Jefferyjasmin"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    Github
                  </a>
                </button>
                <button className="btn btn-primary LinkedIn">
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

            {/* <button style={{ height: "10%", width: "30%" }}>MY_Profile</button> */}
          </div>
          <div className="banner_image">
            <h1>J</h1>
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
