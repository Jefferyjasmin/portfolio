import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Software Engineer",
    "Mobile Developer",
    "FullStack Engineer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="banner">
      <div className="dark-overlay landing-inner ">
        <div className="containers">
          <div className={`banner_left `}>
            <div className={`banner_content `}>
              <h2>{text}</h2>
              <h3 className={`left_content `}>
                Hi, My name is Jeffery Jasmin
                <p style={{ marginTop: "20px", fontSize: "1rem" }}>
                  I create interfaces and experiences, love solving real world
                  problems, while bringing ideas to UI
                </p>
              </h3>{" "}
              <span>Front End Develpoment |</span>
              <span> Back End Develpoment |</span>
              <span> FullStack Develpoment</span>
              <div className="banner_right">
                <button className="Resume btn btn-primary ">
                  <a
                    href="https://drive.google.com/file/d/1vQPccEAC9yl0LmWbHJchmQtGYN4kT5JK/view?usp=sharing"
                    https:target="_blank"
                    without
                    rel="noreferrer"
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
                    without
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="btn btn-primary LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/jefferyjasmin/"
                    style={{ textDecoration: "none", color: "white" }}
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    {" "}
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
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
