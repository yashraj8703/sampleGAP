// ContactUs.jsx
import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contact}>
      <h2 className="text-center mb-4">Contact Us / Join Us</h2>
      <div className="text-center">
        <p>Email: <a href="mailto:theatreclub@example.com">theatreclub@example.com</a></p>
        <p>Phone: +91 98765 43210</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="mt-3">
          <a href="#" className="btn btn-primary mx-1">Facebook</a>
          <a href="#" className="btn btn-danger mx-1">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
