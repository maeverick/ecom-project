import React from "react";
import "./preview.style.css";
import {useNavigate} from "react-router-dom"

const Preview = ({ title, items }) => {
  const navigate = useNavigate()
  return(
    <div className="preview">
      <h1>{title}</h1>
      <div className="preview-items">
        {
          
        items.filter(((item,index) => index < 3)).map(({name,price,imageUrl}) => {
          return (
            <div className="product-display" onClick={() => navigate(`/products/${name}`)}>
              <div className="product-image">
                <img src={`${imageUrl}`} alt="" />
              </div>
              <div className="product-price">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}
export default Preview;
