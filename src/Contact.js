import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <div className="title" style={{ color: "white" }}>
        <h2>Contact Me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          error vitae saepe omnis officia laborum facilis, eius voluptatum fuga
          veniam veritatis praesentium neque dignissimos a blanditiis delectus
          qui cum repudiandae!
        </p>
      </div>
      <div className="contactForm">
        <div className="row">
          <div className="col50">
            <input type="text" name="" placeholder="First Name" />
          </div>
          <div className="col50">
            <input type="text" name="" placeholder="First Name" />
          </div>
        </div>
        <div className="row">
          <div className="col50">
            <input type="text" name="" placeholder="Email" />
          </div>
          <div className="col50">
            <input type="number" name="" placeholder="Mobile No." />
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <input className="submitBtn" type="submit" value="send"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
