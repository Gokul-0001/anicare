import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cat1 from '../../assets/images/Cat1.png';
import Cat2 from '../../assets/images/Cat2.png';
import Cat3 from '../../assets/images/Cat3.png';
import Cat4 from '../../assets/images/Cat4.png';
import Cat5 from '../../assets/images/Cat5.png';

import './Home.css'; 
import CategoriesSlider from "./Categories";
import BannerSlider from "./Banner";
import slide1 from '../../assets/images/banner1.jpg';
import slide2 from '../../assets/images/banner2.jpg';
import slide3 from '../../assets/images/banner1.jpg';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product1.jpg';
import product4 from '../../assets/images/product2.jpg';
import product5 from '../../assets/images/product1.jpg';
import product6 from '../../assets/images/product2.jpg';

import newsbanner from '../../assets/images/news-banner.png';

import { FaShoppingCart, FaStar } from "react-icons/fa";

const CustomSwiper = () => {
  const slides = [slide1, slide2, slide3];

  const [currentSlide, setCurrentSlide] = useState(0); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="custom-swiper-container">
      <button className="swiper-btn prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slider-image"
        />
      </div>
      <button className="swiper-btn next-btn" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dot-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();


  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <div className="product-card-footer">
        <div className="rating-stars">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="star-icon" />
          ))}
        </div>
        <FaShoppingCart className="cart-icon" />
      </div>
    </div>
  );
};

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', image: product1 },
    { id: 2, name: 'Product 2',  image: product2 },
    { id: 3, name: 'Product 3', image: product3 },
    { id: 4, name: 'Product 4', image: product4 },
    { id: 5, name: 'Product 5', image: product5 },
    { id: 6, name: 'Product 6', image: product6 },
    { id: 7, name: 'Product 1', image: product1 },
    { id: 8, name: 'Product 2',  image: product2 },
    { id: 9, name: 'Product 3', image: product3 },
    { id: 10, name: 'Product 4', image: product4 },
    { id: 11, name: 'Product 5', image: product5 },
    { id: 12, name: 'Product 6', image: product6 },
  ];

  const categories = [
    { id: 1, name: "Livestock ", image: Cat1 },
    { id: 2, name: "Pet Feed", image: Cat2 },
    { id: 3, name: "Aqua Feed", image: Cat3 },
    { id: 4, name: "Production Facilities", image: Cat5 },
    { id: 5, name: "Animal Feed", image: Cat4 },
    { id: 6, name: "Category 6", image: Cat1 },
  ];

  const banners = [
    { id: 1, image: slide1, name: "Banner 1" },
    { id: 2, image: slide2 , name: "Banner 2"},
    { id: 3, image: slide3 ,name: "Banner 3"},
    { id: 4, image: slide1 , name: "Banner 4"},
    { id: 5, image: slide2 ,name: "Banner 5"},
    { id: 6, image: slide3 , name: "Banner 6"},
  ];
  return (
    <div>
      <div className="home-container">
        <CustomSwiper />
      </div>

      <h3 className="section-title">Featured Categories</h3>
      <CategoriesSlider categories={categories} />

      <h3 class="section-title">Featured Products</h3>
      <div className="product-cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h3 className="section-title">Limited-Time Offers</h3>
      <BannerSlider banners={banners} />

      <div className="newsletter-section">
  <div className="newsletter-content">
    <div className="left-side">
      <h2 className="newsletter-title">
        Stay Informed with the Exclusive Offers Directly in Your Inbox!
      </h2>
      <p className="newsletter-para">
        Get the latest updates, promotions, and insights by subscribing to our newsletter.
      </p>

      <div className="newsletter-input-wrapper">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
    <div className="right-side">
      <img
        src={newsbanner}
        alt="email-icon"
        className="email-image"
      />
    </div>
  </div>
</div>



    </div>
  );
};

export default Home;
