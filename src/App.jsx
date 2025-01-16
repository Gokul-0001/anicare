import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Navbar Component
import Home from './pages/home/Home';
import Animalfeed from './pages/productpage/Animal-feed';
import Aquafeed from './pages/productpage/Aqua-feed';
import Livestock from './pages/productpage/Livestock-feed';
import Petfeed from './pages/productpage/Pet-feed';
import Productionfacilities from './pages/productpage/Production-facilities';
import ProductDescription from './pages/products/Products';
import ProductPage from './pages/productpage/Productdescription';
import About from './pages/aboutUs/About';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <Navbar />
      <div>
        <Routes>
          {/* Define all routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/Animal-feed" element={<Animalfeed />} />
          <Route path="/Aqua-feed" element={<Aquafeed />} />
          <Route path="/Livestock" element={<Livestock />} />
          <Route path="/Pet-feed" element={<Petfeed />} />
          <Route path="/Production-facilities" element={<Productionfacilities />} />
          <Route path="/product-description/:id" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
