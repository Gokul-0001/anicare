import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../product-components/productcard.css";

const ProductDescription = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { productdetails, productdetailsList } = state;

  // Ensure relatedDetails is not undefined before mapping
  const relatedProducts = productdetails.relatedDetails || [];

  const handleRelatedProductClick = (relatedProductId) => {
    // Find the related product details by ID
    const relatedProduct = productdetailsList.find(
      (product) => product.id === relatedProductId
    );
    if (relatedProduct) {
      // Navigate to the related product description page
      navigate(`/product-description/${relatedProduct.id}`, {
        state: { productdetails: relatedProduct, productdetailsList }
      });
    }
  };

  return (
    <div className="product-details-description-container">
      <div className="product-details-details">
        {/* Left side: Product image */}
        <div className="product-details-image">
          <img src={productdetails.image} alt={productdetails.name} />
        </div>

        {/* Right side: Product Name, Description, Price, Button */}
        <div className="product-details-info">
          <h2>{productdetails.name}</h2>
          <p>{productdetails.description}</p>
          <div className="product-details-price">{productdetails.price}</div>
          <button className="product-details-add-to-cart">Add to Cart</button>
          

        </div>

        
      </div>

      {/* Related Products */}
      <div className="product-details-related-products">
        <h3>Related Products</h3>
        <div className="product-details-related-products-grid">
          {relatedProducts.map((relatedProduct) => {
            const relatedProductDetails = productdetailsList.find(
              (product) => product.id === relatedProduct.id
            ); // Find the matching product by ID

            return (
              relatedProductDetails && ( // Check if relatedProductDetails exists
                <div
                  key={relatedProduct.id}
                  className="product-details-related-product-card"
                  onClick={() => handleRelatedProductClick(relatedProduct.id)} // Handle click event
                >
                  <img
                    src={relatedProductDetails.image}
                    alt={relatedProductDetails.name}
                    className="product-details-related-product-image"
                  />
                  <div className="product-details-related-product-name">
                    {relatedProductDetails.name}
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
