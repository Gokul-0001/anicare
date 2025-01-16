import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Logo from '../../assets/images/anicare_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedOption, setSelectedOption] = useState('India'); // Default selected option

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when any link is clicked
  };
  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle dropdown selection
  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false); // Close dropdown after selection
  };



  // Define the locations array
  const locations = [
    { value: 'placeholder', label: 'India', disabled: true, hidden: true },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'tripura', label: 'Tripura' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west-bengal', label: 'West Bengal' }
  ];

  return (
    <div className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>

        {/* Search Bar Section */}
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search for items..."
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        {/* Location Dropdown Section */}
        <div className="nav-location">
          <div className="dropdown-wrapper">
            <i className="fas fa-map-marker-alt location-icon"></i> {/* Location icon */}
            <div className="custom-dropdown">
              <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption} <i className="fas fa-chevron-down dropdown-icon"></i>
              </button>
              {isOpen && (
                <ul className="dropdown-list">
                  {locations.map((location) => (
                    <li
                      key={location.value}
                      className="dropdown-item"
                      onClick={() => handleSelect(location.label)}
                      disabled={location.disabled}
                      hidden={location.hidden}
                    >
                      {location.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Customer Support Section */}
        <div className="nav-number">
          <div className="support-left">
            <i className="fas fa-phone call-icon"></i> {/* Phone icon */}
          </div>
          <div className="support-right">
            <p className="support-text"><strong>+1223331</strong></p>
            <p className="support-text">24/7 Customer Support</p>
          </div>
        </div>
      </div>

      {/* Nav Links Section */}
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/about">About</Link></li>
          <li className="nav-link dropdown">
            <a>Products <i className="fas fa-chevron-down dropdown-icon"></i></a>
            <ul className="dropdown-menu">
              <li><Link to="/Livestock">Livestock feed</Link></li>
              <li><Link to="/Pet-feed">Pet Feed</Link></li>
              <li><Link to="/Aqua-feed">Aqua Feed</Link></li>
              <li><Link to="/Production-facilities">Production Facilities</Link></li>
              <li><Link to="/Animal-feed">Animal Feed</Link></li>
            </ul>
          </li>
          <li className="nav-link"><a href="/Contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav-mobile-container">
      {/* Top fixed container */}
      <div className="top-container">
        <div className="hamburger-icon">
          <button onClick={toggleMenu}>
            {isMenuOpen ? "×" : "☰"} {/* Change icon based on the state */}
          </button>
        </div>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="call-icon-container">
          <i className="fas fa-phone call-icon"></i>
        </div>
      </div>

      {/* Search section (not fixed) */}
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button className="search-icon">
          <i className="fas fa-search"></i> {/* Font Awesome search icon */}
        </button>
      </div>

      {/* Mobile navigation links (overlay) */}
      {isMenuOpen && (
        <div className="mobile-nav-links">
          <ul>
            <li className="nav-link">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li className="dropdown">
              <a>Products <i className="fas fa-chevron-down dropdown-icon"></i></a>
              <ul className="dropdown-menu">
                <li><Link to="/Livestock" onClick={handleLinkClick}>Livestock feed</Link></li>
                <li><Link to="/Pet-feed" onClick={handleLinkClick}>Pet Feed</Link></li>
                <li><Link to="/Aqua-feed" onClick={handleLinkClick}>Aqua Feed</Link></li>
                <li><Link to="/Production-facilities" onClick={handleLinkClick}>Production Facilities</Link></li>
                <li><Link to="/Animal-feed" onClick={handleLinkClick}>Animal Feed</Link></li>
               
              </ul>
            </li>
            <li>
              <Link to="/Contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Overlay background */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  </div>
  );
};

export default Navbar;
