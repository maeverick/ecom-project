import React from "react";
import PropTypes from "prop-types";
import "./modal.style.css";
import CustomButton from "../custom button/custom-button.component";
const Modal = ({ show, onClose, product }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-details">
          <div className="main-details">
            <div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="checkout-details-text">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Colour: {product.color}</p>
              <p>Size: {product.size}</p>
              <div className="modal-total">
                Total: <strong>${product.price * product.quantity}</strong>
              </div>
            </div>
          </div>
          <CustomButton type="button" className="checkout-button">
            Check out
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
};

export default Modal;
