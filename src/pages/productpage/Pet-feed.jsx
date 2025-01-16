import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../product-components/Productcard";
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product1.jpg';
import "../product-components/productcard.css";

const PetFeed = () => {
  const navigate = useNavigate();


  const [productdetailsList] = useState([
    {
      id: "productdetails-1",
      name: "Jimmycal Pet Suspension",
      image: product1,
      description: "Pet Supplement Price And Quantity\nMinimum Order Quantity: 100 Pack\nPrice: 450 INR/Pack\n\nPet Supplement Product Specifications:\nPhysical Form: Powder\nVariety: Nutrition feeds\n\nPet Supplement Trade Information:\nSupply Ability: 1 Pack Per Day\nDelivery Time: 1 Day\n\nProduct Description:\n\nDOSAGE\n\nJIMMYCAL - PET SUSPENSION",
      price: "$450", 
      relatedDetails: [
        { id: "productdetails-1", name: "Goat", image: product2 }, 
        { id: "productdetails-2", name: "Sheep", image: product3 },
        { id: "productdetails-3", name: "Goat", image: product2 }, 
      ],
    } ,
    {
      id: "productdetails-2",
      name: "Calstrong Pet Tablets",
      image: product2,
      description: "Pet Tablet Price And Quantity\nMinimum Order Quantity: 100 Pack\nPrice: 450 INR/Pack\n\nPet Tablet Product Specifications:\nPhysical Form: Powder\nVariety: Nutrition feeds\n\nPet Tablet Trade Information:\nSupply Ability: 1 Pack Per Day\nDelivery Time: 1 Day\n\nProduct Description:\n\nDOSAGE\n\nCALSTRONG PET TABLETS",
      price: "$450", 
      relatedDetails: [
        { id: "productdetails-1", name: "Goat", image: product2 }, 
        { id: "productdetails-2", name: "Sheep", image: product3 },
        { id: "productdetails-3", name: "Goat", image: product2 }, 
      ],
    },
    {
      id: "productdetails-3",
      name: "Pet Feed Supplements",
      image: product3,
      description: "Pet Feed Supplements Price And Quantity\nPrice: 450 INR/Pack\nMinimum Order Quantity: 100 Pack\n\nPet Feed Supplements Product Specifications:\nVariety: Nutrition feeds\nPhysical Form: Powder\n\nPet Feed Supplements Trade Information:\nSupply Ability: 1 Pack Per Day\nDelivery Time: 1 Day\n\nProduct Description:\n\nDOSAGE\n\nJIMMYTAB - PET TABLETS\n\nEach uncoated tablet contains:\nVitamins & Minerals",
      price: "$450", 
      relatedDetails: [
        { id: "productdetails-1", name: "Goat", image: product2 }, 
        { id: "productdetails-2", name: "Sheep", image: product3 },
        { id: "productdetails-3", name: "Goat", image: product2 }, 
      ],
    },

    ,
    {
      id: "productdetails-4",
      name: "Dog Vitamin Supplements",
      image: product3,
      description: "Dog Vitamin Supplements Price And Quantity\nPrice: 450 INR/Pack\nMinimum Order Quantity: 100 Pack\n\nDog Vitamin Supplements Product Specifications:\nVariety: Nutrition feeds\nPhysical Form: Powder\n\nDog Vitamin Supplements Trade Information:\nSupply Ability: 1 Pack Per Day\nDelivery Time: 1 Day\n\nProduct Description:\n\nWe are counted as the leading processor and supplier of Dog Vitamin Supplements. These supplements are processed using advanced methodologies and high-grade ingredients under the supervision of our professionals. Our offered supplements provide necessary nutrition to dogs in order to make them healthy and active. These supplements are free from foreign or any harmful ingredients. Highly acknowledged for high nutritional value as well as delectable taste, these Dog Vitamin Supplements are offered in air-tight sealed packaging.",
      price: "$450", 
      relatedDetails: [
        { id: "productdetails-1", name: "Goat", image: product2 }, 
        { id: "productdetails-2", name: "Sheep", image: product3 },
        { id: "productdetails-3", name: "Goat", image: product2 }, 
        
      ],
    },

    ,
    {
      id: "productdetails-5",
      name: "Avin Min Powder",
      image: product3,
      description: "Avin Min Powder\nPrice and Quantity\nPrice: 450 INR/Pack\nMinimum Order Quantity: 100 Pack\n\nAvin Min Powder Product Specifications:\nPhysical Form: Powder\nVariety: Nutrition feeds\n\nAvin Min Powder Trade Information:\nSupply Ability: 1 Pack Per Day\nDelivery Time: 1 Day\n\nProduct Description:\n\nOur enterprise has gained immense recognition for offering high-quality Avin Min Powder. This product is processed using advanced methodologies and high-quality ingredients under the supervision of our professionals. It provides essential nutrients to animals and is known for its rich nutritional content. Highly demanded in the market, the product is offered in secure packaging that ensures freshness and prevents contamination.",
      price: "$450", 
      relatedDetails: [
        { id: "productdetails-1", name: "Goat", image: product2 }, 
        { id: "productdetails-2", name: "Sheep", image: product3 },
        { id: "productdetails-3", name: "Goat", image: product2 }, 
      ],
    }
  ]);

  const handleCardClick = (productdetails) => {
    navigate(`/product-description/${productdetails.id}`, { state: { productdetails, productdetailsList } });
  };

  return (
    <div className="product-details-livestock-container">
      <h1>Pet Feed</h1>
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

export default PetFeed;
