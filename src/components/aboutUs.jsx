import React from "react";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.content}>
        Welcome to the <span className={styles.highlight}>StageCrafters Theatre Club</span>!  
        We are a passionate group of performers, writers, and creators who bring stories to life 
        through the art of theatre. Our club provides a platform for students to explore acting, 
        direction, set design, and backstage work, while building confidence and creativity.  
        Whether it's a Shakespearean classic or a modern drama, our goal is to inspire, entertain, 
        and make every performance unforgettable.
      </p>
    </section>
  );
};

export default AboutUs;
