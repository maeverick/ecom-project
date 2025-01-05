import React from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <section className="navbar">
    <div className="nav">
      <div className="logo">
        <h2>
          <span className="highlight">Yapp</span>arrel
        </h2>
      </div>
     <div className="nav-links">
     <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/story"}>Story</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/faqs"}>FAQs</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contact</Link>
          </li>
        </ul>
     </div>
      <div className="user">
        <ul>
          <li>
            <Link to={""}>cart</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
export default Navbar;
