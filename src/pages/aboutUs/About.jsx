import React, { useState } from "react";
import "./About.css";
import AllPetImage from "../../assets/images/All-pet.jpg"; // Import the image
import AboutImage from "../../assets/images/About-img.webp";
import FaqImage from "../../assets/images/faq.webp";
import iconImg1 from "../../assets/images/icons(1).png";
import iconImg2 from "../../assets/images/icons(2).png";
import iconImg3 from "../../assets/images/icons(3).png";
import iconImg4 from "../../assets/images/icons(4).png";



const About = () => {
  const [faqIndex, setFaqIndex] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const scrollNext = () => {
    setScrollIndex((prev) => (prev + 1) % reviews.length); // Loop through reviews
  };

  const scrollPrev = () => {
    setScrollIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    ); // Loop back to the last review
  };

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) {
      scrollPrev();
    } else if (touchStartX - touchEndX > 50) {
      scrollNext();
    }
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const reviews = [
    {
      name: "Anjali R.",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      text: "I was really impressed with how quickly I saw positive changes after using the product. The recovery was faster than expected, and I felt better in no time. Highly recommend it!",
      rating: 5,
    },
    {
      name: "Ravi K.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "This product really works! I noticed improvements almost immediately. It's amazing to see such quick results and I feel so much better now. Definitely worth trying.",
      rating: 5,
    },
    {
      name: "Meera S.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I've never experienced such a fast recovery! The product truly works wonders, and I feel more energized. The changes were visible much quicker than I anticipated.",
      rating: 5,
    },
    {
      name: "Suresh T.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "As a vendor, I’ve seen a rapid increase in sales after introducing this product to our store. Customers are coming back for more because they see real results. It sells itself!",
      rating: 5,
    },
    {
      name: "Priya L.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      text: "The demand for this product is growing fast! It moves off the shelves quickly because customers notice how effective it is. They keep returning for more. It’s a great product to work with.",
      rating: 5,
    },
  ];
  

  return (
    <div className="about-page">
      {/* Brand Story Section */}
      <div className="brand-story">
        <div className="text-content">
          <h4 className="about-section-title">BRAND STORY</h4>
          <h1 className="main-title">
 Excellence in Animal Healthcare
</h1>
<p className="description">
  Anicare began with a mission to revolutionize animal healthcare and nutrition. 
  With over three decades of expertise, we have crafted premium animal health care 
  and poultry feed supplements designed to enhance the well-being and productivity 
  of farm animals. Our commitment is to ensure sustainable and ethical practices 
  that promote healthier and happier animals.
  <br />
  <br />
  From utilizing high-quality ingredients to adhering to rigorous manufacturing 
  standards, Anicare delivers reliable, safe, and effective products. Trusted by 
  farmers and veterinary professionals worldwide, we take pride in advancing animal 
  health and supporting the growth of sustainable farming practices. Join us on 
  this journey to create a brighter future for animal care.
</p>

        </div>
        <div className="image-container">
           <img
            src={AllPetImage}
            alt="All Pets"
            className="brand-image"
          />
        </div>
      </div>

 {/* Blue Section */}
<div className="blue-section">
  <h2 className="blue-title">The Mindful & Deliberate Approach We Follow</h2>
  <p className="blue-description">
    At Anicare, we ensure high efficacy and reliability in our Animal Health Care Products, including Feed Supplements and Poultry Feed Supplements. 
    By using the finest grade ingredients and chemicals, our production processes are designed to achieve superior quality while adhering to strict industry norms.
    Our advanced manufacturing ensures safe and effective products for healthier animals.
  </p>
  <div className="blue-icons">
    <div className="icon-item">
      <img
        src={iconImg1} // Replace with the correct icon URL
        alt="Modern Technology"
        className="icon-image"
      />
      <p className="icon-text">Modern Technology</p>
    </div>
    <div className="icon-item">
      <img
         src={iconImg2} // Replace with the correct icon URL
        alt="Wide Range of Products"
        className="icon-image"
      />
      <p className="icon-text">Wide Range of Products</p>
    </div>
    <div className="icon-item">
      <img
          src={iconImg3} // Replace with the correct icon URL
        alt="Safe & Effective"
        className="icon-image"
      />
      <p className="icon-text">Safe & Effective</p>
    </div>
    <div className="icon-item">
      <img
         src={iconImg4} // Replace with the correct icon URL
        alt="Affordable Prices"
        className="icon-image"
      />
      <p className="icon-text">Affordable Prices</p>
    </div>
  </div>
</div>


{/* Vision & Mission Section */}
<div className="vision-mission-section">
  <div className="vision-mission-content">
    <div className="vision-mission-image">
    <img
  src={AboutImage}
  alt="About Image"
  className="brand-image"
  style={{ width: "500px", height: "500px" }}
/>
    </div>
    <div className="vision-mission-text">
      <h2 className="section-title">Our Vision & Mission</h2>
      <div className="vision-section">
        <h3 className="vision-title">Vision Statement</h3>
        <p className="vision-description">
          At Anicare, our vision is to revolutionize animal health care and poultry feed supplements by adhering to the highest standards of quality and innovation. We aim to enhance the well-being of farm animals through superior health care solutions, contributing to sustainable and efficient animal production while prioritizing the health of animals and environmental safety. Our focus is on crafting products that meet global standards and foster trust among our valued customers.
        </p>
      </div>
      <div className="mission-section">
        <h3 className="mission-title">Mission Statement</h3>
        <p className="mission-description">
          Our mission at Anicare is to deliver exceptional animal health care and poultry feed supplements by leveraging cutting-edge technology and premium-grade ingredients. We are committed to fostering animal well-being, promoting eco-friendly practices, and driving innovation in our manufacturing processes. With a dedication to customer satisfaction, we aim to provide effective, reliable, and safe products that ensure the health and productivity of farm animals.
        </p>
        <button className="consultation-button">
          📞 Call For Consultation
        </button>
      </div>
    </div>
  </div>
</div>

    {/* Company Status and Future Aims Section */}
<div className="company-status-section">
  <div className="company-status-content">
    <h2 className="about-section-title">Present Status & Future Aims</h2>
    <div className="status-and-aims">
      <div className="present-status">
        <h3 className="status-title">Present Status of ANICARE</h3>
        <p className="status-description">
          Currently, ANICARE is engaged in the manufacturing of Pet Care Products and Animal Feed Supplements for Dairy Cattle, Canine, Poultry, and Aquaculture in the variety of Powders, Bolus, Premixes, Tablets, and Liquid Orals. We also operate as a repacking unit for key reputed companies.
        </p>
        <p className="status-description">
          We manufacture Feed Supplement Products or Pet Care Products for the following companies:
          <ul className="company-list">
            <li>Vsol Pharma Pvt. Ltd / Chennai</li>
            <li>Provet Pharma Pvt. Ltd / Chennai</li>
            <li>Farm Cure India / Chennai</li>
            <li>Bovian Health Care Pvt. Ltd / Faridabad, Haryana</li>
          </ul>
        </p>
      </div>

      <div className="future-aims">
        <h3 className="plans-title">Future Aims</h3>
        <p className="plans-description">
          ANICARE's future plans include the induction of various veterinary products such as:
        </p>
        <ul className="plans-list">
          <li>Antibiotic</li>
          <li>Antibacterials</li>
          <li>Anthelmintic</li>
          <li>Antipyretic & Analgesic</li>
          <li>Rumen Tonic</li>
          <li>Nervine & General Tonics</li>
        </ul>
      </div>
    </div>

    <div className="board-of-directors">
      <h3 className="board-title">Board of Directors</h3>
      <div className="directors">
        <div className="director-left">
          <h4>Dr. M. A. Rasheed</h4>
          <p>Dr. Rasheed holds a Post Graduate degree in Veterinary Science with a specialization in Pathology. He has been part of ALVED PHARMA, Vetnex, Pfizer Animal Health, and ANICARE since 2012.</p>
        </div>
        <div className="director-middle">
          <h4>Mr. K. S. Zainuddeen</h4>
          <p>Mr. Zainuddeen has over 33 years of experience in manufacturing feed supplements, oral dosage forms, and procurement. He has served at RFCL & Vetnex in various managerial roles.</p>
        </div>
        <div className="director-right">
          <h4>Mr. S. Narayan</h4>
          <p>Mr. Narayan has vast experience in marketing, ensuring timely supplies and efficient logistics of end products.</p>
        </div>
      </div>
    </div>
  </div>
</div>


  {/* FAQ Section */}
<div className="faq-section">
  <div className="faq-left">
  <h2 className="section-title">FAQ</h2>
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <div className="faq-list">
      {[
        "What types of animal health care products does Anicare offer?",
        "How are Anicare’s poultry feed supplements manufactured?",
        "Are your products safe and free from harmful chemicals?",
        "What measures does Anicare take to ensure quality control?",
        "Can I get custom formulations for specific livestock needs?",
      ].map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${faqIndex === index ? "open" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="faq-question">
            {faq}
            <span className="faq-toggle">
              {faqIndex === index ? "−" : "+"}
            </span>
          </h3>
          {faqIndex === index && (
            <p className="faq-answer">
              {[
                "Anicare offers a wide range of animal health care products, including feed supplements, poultry feed supplements, and veterinary solutions tailored to the well-being of farm animals.",
                "Our poultry feed supplements are produced using advanced manufacturing techniques under strict veterinary control, ensuring optimal quality and effectiveness.",
                "Yes, all our products are formulated using premium-grade ingredients and are free from harmful chemicals, adhering to industry standards.",
                "Anicare follows rigorous quality control processes, including sourcing high-grade materials, hygienic production environments, and thorough product testing.",
                "Yes, we can provide customized solutions tailored to specific livestock requirements. Please contact us for further details.",
              ][index]}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
  
</div>



      {/* Customer Feedback Section */}
      <div className="feedback-section">
        <h2 className="feedback-title">Our Customer Feedback</h2>
        <p className="feedback-subtitle">
          Don’t take our word for it. Trust our customers
        </p>
        <div className="feedback-container">
          <button className="nav-button prev-button" onClick={scrollPrev}>
            &lt; 
          </button>
          <div className="feedback-cards">
            <div
              className="cards-wrapper"
              style={{
                transform: `translateX(-${scrollIndex * 320}px)`, // Adjusted for card width and margin
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <div className="feedback-card" key={index}>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="feedback-image"
                  />
                  <h3 className="feedback-name">{review.name}</h3>
                  <p className="feedback-text">{review.text}</p>
                  <div className="feedback-rating">
                    {"★".repeat(review.rating)}{" "}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="nav-button next-button" onClick={scrollNext}>
             &gt;
          </button>
        </div>
      </div>  


    </div>
  );
};



export default About;
