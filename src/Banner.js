import React from "react";
import jeff from "./images/jeff.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" id="Home">
      <div className="imgSidebar">
        <img className="bannerImg" src={jeff} alt="" />
      </div>
      <div className="contentBx">
        <h5 className="logoText">My_Portfolio</h5>
        <div>
          <h4>
            <span>Hello</span>,I'm
          </h4>
          <h2>Jeffery Jasmin</h2>
          <h4>I'm a Software Developer</h4>
          <p>
            sdfsdfdsfdsfdsfsdfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfsdfdsfdsf
            sdfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfsdfdsfdsfdsfsdfds
            sdfdsfdsfdsfdsfsdfdsfdsfsdfsdfsdfsdfsdfdsfdsfsdfdsfsdfsdfdsfdsfsdfsdfsdfsdfsdf
            sdfsdfsdfsdfsdfsdfsdfsdfsdfdsfdsfdsfsdfdsfdsfdsfsdfdsfsdfdsfsdfsdfsdfsdf
          </p>
          <a href="#" className="btn">
            About me
          </a>
        </div>
        <ul className="sci">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
