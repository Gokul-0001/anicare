import React from "react";
import "./productcard.css";

const ProductCard = ({ productdetails, onCardClick }) => {
  return (
    <div className="product-details-card" onClick={onCardClick}>
      <img src={productdetails.image} alt={productdetails.name} />
      <div className="product-details-title">{productdetails.name}</div>
      <div className="product-details-price">{productdetails.price}</div> 

      
    </div>
  );
};

export default ProductCard;
