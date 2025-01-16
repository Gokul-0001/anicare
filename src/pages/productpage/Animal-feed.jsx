import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../product-components/Productcard";
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product1.jpg';
import "../product-components/productcard.css";

const AnimalFeed = () => {
  const navigate = useNavigate();


  const [productdetailsList] = useState([
    {
      id: "Animal-1",
      name: "Amino Forte Syrup 5 ltr",
      image: product1,
      description: "Price: 445 INR/Liter | Application: Fodders | Disease Prevention: Improve Immunity | Function: Healthcare Supplement | Texture: Fresh | Efficacy: Feed Preservatives | Fragrance: Delicate Smell | Dosage: Solution | Suitable For: Cattle | Supply Ability: 300 Per Day | Delivery Time: 10 Days",
      price: "$445",
      relatedDetails: [
        { id: "Animal-2", name: "Goat", image: product2 },
        { id: "Animal-3", name: "Sheep", image: product3 },
      ],
    },
    {
      id: "Animal-2",
      name: "Amino Forte 1 ltr",
      image: product1,
      description: "Price: 125 INR/Liter | Suitable For: Cattle | Physical Form: Liquid | Variety: Herbal Supplements | Type: Amino Forte Syrup | Fragrance: Delicate Smell | Efficacy: Feed Preservatives | Texture: Fresh | Disease Prevention: Improve Immunity | Supply Ability: 300 Per Day | Delivery Time: 10 Days",
      price: "$125",
      relatedDetails: [
        { id: "Animal-2", name: "Goat", image: product2 },
        { id: "Animal-3", name: "Sheep", image: product3 },
      ],
    },
    {
      id: "productdetails-3",
      name: "Sheep",
      image: product3,
      description: "This is a detailed description of Sheep.",
      price: "$400", 
      relatedDetails: [
        { id: "productdetails-1", name: "Cattle", image: product1 }, 
        { id: "productdetails-2", name: "Goat", image: product2 }, 
      ],
    },
    {
      id: "Animal-3",
      name: "Broliv Total Vet Liquid 10 ltr",
      image: product3,
      description: "Price: 1750 INR/Liter | Efficacy: Feed Preservatives | Texture: Fresh | Fragrance: Delicate Smell | Function: Healthcare Supplement | Application: Fodders | Disease Prevention: Improve Immunity | Type: Broliv Total Vet Liquid | Variety: Herbal Supplements | Delivery Time: 10 Days | Supply Ability: 300 Per Day",
      price: "$1750",
      relatedDetails: [
        { id: "Animal-1", name: "Amino Forte Syrup 5 ltr", image: product1 },
        { id: "Animal-2", name: "Amino Forte 1 ltr", image: product1 },
      ],
    },
    {
      id: "Animal-4",
      name: "Broliv Total Vet Liquid 5 ltr",
      image: product1,
      description: "Price: 520 INR/Liter | Delivery Time: 10 Days | Supply Ability: 300 Per Day | Function: Healthcare Supplement | Disease Prevention: Improve Immunity | Application: Fodders | Fragrance: Delicate Smell | Texture: Fresh | Efficacy: Feed Preservatives | Physical Form: Liquid | Variety: Herbal Supplements",
      price: "$520",
      relatedDetails: [
        { id: "Animal-1", name: "Amino Forte Syrup 5 ltr", image: product1 },
        { id: "Animal-2", name: "Amino Forte 1 ltr", image: product1 },
     
      ],
    }
    
  ]);

  const handleCardClick = (productdetails) => {
    navigate(`/product-description/${productdetails.id}`, { state: { productdetails, productdetailsList } });
  };

  return (
    <div className="product-details-livestock-container">
      <h1>Animal Products</h1>
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

export default AnimalFeed;
