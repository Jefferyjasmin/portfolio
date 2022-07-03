import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
const Contact = ({ bgd, lightOrDark }) => {
  const [darks, setDarks] = useState("Darks");

  const form = useRef();
  let sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0zfmyws",
        "template_co9ecr2",
        form.current,
        "nYNQW-ypv8BFPjLIV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.lg("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contacts">
      <div className="title" style={{ color: "white" }}>
        <h2>Contact Me</h2>
        <p>
          Thank you for taking the time to review my porfolio ,I hope you
          enjoied my projects
        </p>
      </div>
      <form
        ref={form}
        className="contactForm"
        id="contact-form"
        onSubmit={sendEmail}
      >
        <div className="row">
          <div className="col50">
            <input type="text" name="Firstname" placeholder="First Name" />
          </div>
          <div className="col50">
            <input type="text" name="Lastname" placeholder="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col50">
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="col50">
            <input type="number" name="Mobile" placeholder="Mobile No." />
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <input className="btn btn-primary" type="submit" value="send" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;