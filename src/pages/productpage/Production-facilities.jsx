import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../product-components/Productcard";
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
// import product3 from '../../assets/images/product1.jpg';
import "../product-components/productcard.css";


const ProductionFacilities = () => {
  const navigate = useNavigate();


  const [productdetailsList] = useState([
    {
      id: "Animal-1",
      name: "Production Facilities",
      image: product1,
      description: "Price: 450 INR/Pack | Supply Ability: 1 Per Day | Delivery Time: 1 Day | Variety: Nutrition Feeds | Physical Form: Powder",
      price: "$450",
      relatedDetails: [
      
      ],
    },
    {
      id: "productdetails-2",
      name: "Analytical Lab",
      image: product2,
      description: "Price: 450 INR/Pack | Variety: Nutrition Feeds | Physical Form: Powder | Supply Ability: 1 Per Day | Delivery Time: 1 Day",
      price: "$450",
      relatedDetails: [
       
      ],
    }
    
    
  ]);

  const handleCardClick = (productdetails) => {
    navigate(`/product-description/${productdetails.id}`, { state: { productdetails, productdetailsList } });
  };

  return (
    <div className="product-details-livestock-container">
      <h1>Production Facilities</h1>
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

export default ProductionFacilities;
