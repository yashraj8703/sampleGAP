import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { supabase } from "./supabaseClient"; // adjust path if needed
import styles from "./heroSlider.module.css"; // ✅ Import module CSS

const HeroSlider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanners();
  }, []);

  async function fetchBanners() {
    const { data, error } = await supabase
      .from("banner_images") 
      .select("id, imageURL, imageQuote");

    if (error) {
      console.error("Error fetching banners:", error);
    } else {
      setBanners(data);
    }
  }

  return (
    <div

      id="quoteCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={banner.imageURL}
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              alt={`Slide ${index + 1}`}
            />
            <div
              className="carousel-caption"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h5>{`"${banner.imageQuote}"`}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
