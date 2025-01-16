import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../product-components/Productcard";
import product1 from '../../assets/images/product1.jpg';

import "../product-components/productcard.css";

const AquaFeed = () => {
  const navigate = useNavigate();


  const [productdetailsList] = useState([
    {
      id: "Animal-1",
      name: "Agripower Aqua Plus",
      image: product1,
      description: "AGRIPOWER AQUA PLUS is a high-quality nutrition feed designed for aquatic animals, offering essential minerals and amino acids to prevent deficiency syndromes. It improves fertility, productivity, and growth in fishes and prawns. Price: 450 INR/Pack, Minimum Order Quantity: 100 Pack, Physical Form: Powder, Variety: Nutrition feeds, Payment Terms: Cash in Advance (CID), Supply Ability: 1 Pack Per Day, Delivery Time: 1 Day, Main Domestic Market: All India.",

      price: "450 INR/Pack",
      relatedDetails: [   
      ],
    },
    
  ]);

  const handleCardClick = (productdetails) => {
    navigate(`/product-description/${productdetails.id}`, { state: { productdetails, productdetailsList } });
  };

  return (
    <div className="product-details-livestock-container">
      <h1>Aqua Feed</h1>
      <div className="product-details-grid">
        {productdetailsList.map((productdetails) => (
          <ProductCard
            key={productdetails.id}
            productdetails={productdetails}
            onCardClick={() => handleCardClick(productdetails)}
          />
        ))}
      </div>



    </div>
  );
};

export default AquaFeed;
