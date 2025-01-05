import React from "react";
import "./contact.style.css";
import CustomButton from "../../Component/custom button/custom-button.component";
import FormField from "../../Component/form-field/form-field.component";
const Contact = () => (
  <section className="contact">
    <div className="story-intro">
      <div className="story-intro-text">
        <h1>
          <span className="highlight">Say hello to us</span> <br />
          We love to hear you😊
        </h1>
      </div>
      <div className="story-image">
        <img
          src={require("../../images/header/positive-european-woman-has-break-after-work.jpg")}
          alt=""
        />
      </div>
    </div>
    <div className="contact-area">
      <div className="contact-form">
        <h1>
          Let's <strong className="highlight">Begin</strong>
        </h1>
        <form action="" method="post">
          <FormField placeholder={"Fullname"} />
          <FormField type={"email"} placeholder={"Email Address"} />
          <FormField placeholder={"Subject"} />
          <textarea
            name=""
            placeholder="Tell us about the project...."
          ></textarea>
        </form>
        <span className="contact-button">
          <CustomButton>SEND</CustomButton>
        </span>
      </div>
      <div className="contact-address">
        <div className="contact-address-box">
          <div className="contact-box-content">
            <h3>New Business</h3>
            <a href="mailto:orabogheneoziwele@gmail.com">
              orabogheneoziwele@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-address-box">
          <div className="contact-box-content">
            <h3>Main Studio</h3>
            <a href="mailto:orabogheneoziwele@gmail.com">
              orabogheneoziwele@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-address-box">
          <div className="contact-box-content">
            <h3>Our Office</h3>
            <p>Akershusstranda 20, 0150 Oslo, Norway</p>
          </div>
        </div>
        <div className="contact-address-box"></div>
      </div>
    </div>
  </section>
);
export default Contact;
