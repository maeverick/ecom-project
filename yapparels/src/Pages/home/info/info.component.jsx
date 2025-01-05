import React from "react";
import "./info.style.css";
import { useState } from "react";

const Introduction = () => (
  <div className="info-section">
    <div className="info-image">
    <img src={require("../../../images/cody-lannom-G95AReIh_Ko-unsplash.jpeg")} alt="" />
    </div>
    <div className="info-text">
      <h3>
        Good <span className="highlight">Design</span>
      </h3>
      <h3>
        Ideas for <span className="highlight">your</span> family
      </h3>
      <p>
        Little Fashion templates comes with sign in / sign up pages, product
        listing / product detail, about, FAQs, and contact page.
      </p>
      <p>
        Since this HTML template is based on Boostrap 5 CSS library, you can
        feel free to add more components as you need.
      </p>
    </div>
  </div>
);
const HowWeWork = () => (
  <div className="info-section">
    <div className="info-image">
    <img src={require("../../../images/header/positive-european-woman-has-break-after-work.jpg")} alt="" />
    </div>
    <div className="info-text">
      <h3>Life at Studio</h3>

      <p>
        Over three years in business, We’ve had the chance to work on a variety
        of projects, with companies
      </p>
      <p>Custom work is branding, web design, UI/UX design</p>
    </div>
  </div>
);
const Capabilities = () => (
  <div className="info-section">
    <div className="info-image">
      <img src={require("../../../images/pim-chu-z6NZ76_UTDI-unsplash.jpeg")} alt="" />
    </div>
    <div className="info-text">
      <h3>What can help you?</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam
        sed hic reprehenderit similique quis praesentium ex.
      </p>
      <p></p>
    </div>
  </div>
);
const Info = () => {
  const [info, setinfo] = useState("Introduction");
  const HandleTab = (tab) => {
    setinfo(tab);
  };

  return (
    <section className="info">
      <h1>
        Get started with <span className="highlight">Yapp</span>arrel
      </h1>
      <div className="info-container">
        <div className="info-selector">
          <ul>
            <li onClick={() => HandleTab("Introduction")}>Introduction</li>
            <li onClick={() => HandleTab("How we work")}>How we work</li>
            <li onClick={() => HandleTab("Capabilities")}>Capabilities</li>
          </ul>
        </div>
        <div className="info-content">
          {info === "Introduction" && Introduction()}
          {info === "How we work" && HowWeWork()}
          {info === "Capabilities" && Capabilities()}
        </div>
      </div>
    </section>
  );
};

export default Info;
