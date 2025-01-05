import React from "react";

import "./faq.style.css";

const FAQS = () => (
  <section className="faqs">
    <div className="product-intro">
      <h1>
        <span className="highlight">Your favorite questions
       </span> <br />
       and our answers to them
      </h1>
    </div>
    <div className="questions">
      <div className="genaral">
        <h2>General Info.</h2>
        <details>
          <summary>What is this Yapparel?</summary>
          <p>
            Yapparel is free Bootstrap 5 website template for everyone. There
            are 8 HTML pages included in this template and you can expand more
            pages as you need.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </details>
        <details>
          <summary>What is a OzTech website?</summary>
          <p>
            OzTech is a great website to download free HTML website templates
            for your business or personal use.
          </p>
          <p>
            OzTech website has been online for almost 8 years now. Thank you
            for visiting our website.
          </p>
        </details>
        <details>
          <summary>How do I support your website?</summary>
          <p>
            You can support our OzTech website by sharing it to your friends or
            colleagues on the web or social media.
          </p>
        </details>
      </div>

      <div className="about-products">
        <h2>About  <strong className="highlight"> our products</strong></h2>
        <details>
          <summary>What is Fashion Design?</summary>
          <p>
            Yapparel is free Bootstrap 5 website template for everyone. There
            are 8 HTML pages included in this template and you can expand more
            pages as you need.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </details>
        <details>
          <summary>How do I use the product?</summary>
          <p>
            OzTech is a great website to download free HTML website templates
            for your business or personal use. OzTech website has been online
            for almost 8 years now. Thank you for visiting our website.
          </p>
        </details>
      </div>
    </div>
  </section>
);

export default FAQS;
