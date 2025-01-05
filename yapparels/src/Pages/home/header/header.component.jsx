import React from "react";
import { useState } from "react";
import CustomButton from "../../../Component/custom button/custom-button.component";

const First = () => (
  <div className="header one">
    <div className="header-content">
      <h1>Welcome to Yapparel!!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        quisquam quod sapiente est dolorum temporibus.
      </p>
      <CustomButton>Get started!!</CustomButton>
    </div>
  </div>
);
const Second = () => (
  <div className="header two">
    <div className="header-content">
      <h1>Let's get you that Fit 😉</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        quisquam quod sapiente est dolorum temporibus.
      </p>
      <CustomButton>Shop Now</CustomButton>
    </div>
  </div>
);
const Third = () => (
  <div className="header three">
    <div className="header-content">
      <h1>Be tha Boss!! 😎</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        quisquam quod sapiente est dolorum temporibus.
      </p>
      <div className="btn-contain">
        <CustomButton>Shop Now</CustomButton>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [activeTab, setTab] = useState("first");
  const handleTab = (data) => {
    setTab(data);
  };
  return (
    <section className="main-header">
      <div className="selector">
        <span
          className="tab-selector"
          onClick={() => handleTab("first")}
        ></span>
        <span
          className="tab-selector"
          onClick={() => handleTab("second")}
        ></span>
        <span
          className="tab-selector"
          onClick={() => handleTab("third")}
        ></span>
      </div>
      <div>
        <h1>
          {activeTab === "first" && First()}
          {activeTab === "second" && Second()}
          {activeTab === "third" && Third()}
        </h1>
      </div>
    </section>
  );
};

export default Header;
