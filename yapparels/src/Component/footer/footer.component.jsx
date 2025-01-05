import React from "react";
import "./footer.style.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <section className="footer">
    <div className="section-container">
      <div>
        <h3><span className="highlight">Yapp</span>arels</h3>
        <p>Copyright &#169;<span className="dim"> Yapparels</span></p>
        <p>Designed by Roderick Oziwele </p>
      </div>
      <div>
        <h3>
            Sitemap
        </h3>
        <ul>
            <li><Link to={"/story"}>story</Link></li>
            <li><Link to={""}>privacy policy</Link></li>
            <li><Link to={"/contacts"}>contact</Link></li>
            <li><Link to={"/products"}>products</Link></li>
            <li><Link to={"/faqs"}>FAQs</Link></li>
        </ul>
      </div>
      {/* <div>
        <h3>Social</h3>
        <i class="fa-brands fa-instagram"></i>
      </div> */}
    </div>
  </section>
);

export default Footer;
