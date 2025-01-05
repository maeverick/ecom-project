import React, { useState } from "react";
import "./details.style.css";
import SHOP_DATA from "../collection/082 shop.data";
import { useParams } from "react-router-dom";
import Modal from "../Modal/modal.component";

const ProductDetail = () => {
  const { productName } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);

  const allProducts = SHOP_DATA.reduce((acc, category) => {
    return [...acc, ...category.items];
  }, []);

  const product = allProducts.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleQuantityChange = (e) => {
    setProductQuantity(Number(e.target.value));
  };

  return (
    <section className="product-detail-page">
      <div className="product-intro">
        <h1>
          <span className="highlight">We provide you</span> <br />
          Fashionable stuffs
        </h1>
      </div>
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="product-detail-text">
          <div>
            <div className="product-name">
              <h1>{product.name}</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="price">${product.price}</div>
          </div>
          <div className="description">
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              quis officia porro. Quaerat in natus magnam quo, iste numquam!
              Ullam eum optio, similique dignissimos earum consectetur laborum
              voluptate sunt animi.
            </p>
          </div>
          <div className="shop">
            <input
              type="number"
              name="number"
              id="number"
              min={1}
              value={productQuantity}
              onChange={handleQuantityChange}
              placeholder="Quantity"
            />
            <button id="shop" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        product={{ ...product, quantity: productQuantity }}
      />
    </section>
  );
};

export default ProductDetail;
