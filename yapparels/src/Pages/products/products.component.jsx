import React from "react";
import "./product.style.css";
import Collection from "../../Component/collection/collection.component";

const Products = () => <div className="products">
    <div className="product-intro">
        <h1>
          <span className="highlight">Choose your</span> <br />favourite stuff
        </h1>
    </div>
    <Collection/>
</div>;
export default Products;
