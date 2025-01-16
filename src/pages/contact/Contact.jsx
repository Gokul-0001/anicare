import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-page">
        {/* Contact Us Section */}
        <div className="contact-container">
          <div className="left-section">
            <h3 className="red-title">Get in Touch</h3>
            <h1 className="main-title">Contact Us</h1>
            <p className="subtext">
              Join now for expert tips and exclusive offers to keep your pet animals happy and healthy.
            </p>

            <div className="contact-details">
              <p>
                <strong>Phone:</strong> 1800-270-3585 (Toll Free)
              </p>
              <p>
                <strong>Email:</strong> contact@anicare.com
              </p>
              <p>
                <strong>Timings:</strong> Monday - Friday, 9 am - 5.30 pm
              </p>
              <p>
                <strong>Address:</strong>
              </p>
              <p>
                209/1B, Parivakkam Main Road, Poonamallee Bye Pass Road,<br />
                Chennai - 600056, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="right-section">
            <h3 className="red-title">Stay In The Loop</h3>
            <p>
              Join the Anicare family today! From expert care advice to exclusive deals, get the insights and resources you need to nurture a healthy, happy life for your beloved pets. We are happy to help you!
            </p>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
              </div>

              <div className="radio-group">
                <label>My Pets *</label><br />

                <div className="radio-options">
                  <input type="radio" name="pets" value="dogs" id="dogs" required />
                  <label htmlFor="Pets">Pets</label>
                  <input type="radio" name="pets" value="cats" id="cats" required />
                  <label htmlFor="Farm Animal">Farm Animal</label>
                  <input type="radio" name="pets" value="both" id="both" required />
                  <label htmlFor="Others">Others</label>
                </div>
              </div>

              <div className="radio-group">
                <label>Are you representing?</label><br />
                <div className="radio-options">
                  <input type="radio" name="representing" value="vendors" id="vendors" required />
                  <label htmlFor="vendors">Vendors</label>
                  <input type="radio" name="representing" value="sales" id="sales" required />
                  <label htmlFor="sales">Sales</label>
                  <input type="radio" name="representing" value="company" id="company" required />
                  <label htmlFor="company">Company</label>
                  <input type="radio" name="representing" value="hospital" id="hospital" required />
                  <label htmlFor="hospital">Hospital & Clinic</label>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section" style={{ textAlign: "center", marginTop: "40px" }}>
          <h3 className="red-title" style={{ textAlign: "left", paddingLeft: "30px" }}>Find Us</h3>
          <p style={{ textAlign: "left", paddingLeft: "30px", paddingBottom: "15px", color: "black" }}>Use the map below to locate our nearest office or store.</p>
          <div className="location-frame" style={{ width: "100%", height: "500px", margin: "0 auto", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094077!2d144.95592831531687!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cfef0f7e2ed4!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1672453476715!5m2!1sen!2sau"
              width="95%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;
