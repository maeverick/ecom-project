import React from "react";
import "./home.style.css";
import Header from "./header/header.component";
import Info from "./info/info.component";
import { Link } from "react-router-dom";
import Directory from "../../Component/directory/directory.component";
const Home = () => (
  <section className="home">
    <Header />
    <Info />
    <div className="retail-shop-owner">
      <div className="retail-image">
        <img
          src={require("../../images/retail-shop-owner-mask-social-distancing-shopping.jpg")}
          alt=""
        />
      </div>
      <div className="retail-text">
        <h1>
          <strong className="highlight">Retail</strong> shop owners
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolorem
          sit distinctio quaerat quisquam minus nobis.
        </p>
        <Link to={"/products"}>Explore Products</Link>
      </div>
    </div>
    <div className="preview">
      <Directory />
    </div>
  </section>
);

export default Home;
