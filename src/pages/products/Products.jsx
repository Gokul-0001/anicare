import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa'; // Import cart and star icons
import './Products.css';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product1.jpg';

const ProductDescription = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); // Hook for programmatic navigation

  const products = [
    { id: 1, name: 'Product 1', description: 'This is a detailed description of Product 1', rating: 4.5, image: product1 },
    { id: 2, name: 'Product 2', description: 'This is a detailed description of Product 2', rating: 4.2, image: product2 },
    { id: 3, name: 'Product 3', description: 'This is a detailed description of Product 3', rating: 4.8, image: product3 },
    { id: 4, name: 'Product 4', description: 'This is a detailed description of Product 4', rating: 4.1, image: product2 },
    { id: 5, name: 'Product 5', description: 'This is a detailed description of Product 5', rating: 4.7, image: product2 },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Filter out the current product from related products
  const relatedProducts = products.filter((prod) => prod.id !== product.id);

  return (
    <div>
      <div className="product-description">
        <div className="product-description-left">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-description-right">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="related-products">
        <h3 cla>Related Products</h3>
        <div className="product-cards">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="product-card"
              onClick={() => navigate(`/product/${relatedProduct.id}`)} // Redirect on click
              style={{ cursor: 'pointer' }}
            >
              <img src={relatedProduct.image} alt={relatedProduct.name} className="product-card-image" />
              <h4>{relatedProduct.name}</h4>
              <div className="related-product-info">
                {/* Ratings */}
                <div className="related-product-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      color={i < Math.floor(relatedProduct.rating) ? '#FFD700' : '#DDD'} // Highlight stars up to rating value
                      size={16}
                    />
                  ))}
                </div>
                {/* Cart Icon */}
                  <FaShoppingCart  className="related-cart-icon"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
