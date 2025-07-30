// Achievements.jsx
import React from "react";
import styles from "./achievements.module.css";

const Achievements = () => {
  const plays = [
    { title: "Romeo & Juliet", date: "March 2024", img: "play1.jpg", desc: "A timeless Shakespearean classic." },
    { title: "Macbeth", date: "Dec 2023", img: "play2.jpg", desc: "Dark and thrilling tragedy." },
    { title: "Drama Fest", date: "Aug 2023", img: "play3.jpg", desc: "Annual celebration of theatre arts." }
  ];

  return (
    <section className={styles.achievements}>
      <h2 className="text-center mb-4">Achievements & Past Productions</h2>
      <div className="row">
        {plays.map((play, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={play.img} className="card-img-top" alt={play.title} />
              <div className="card-body">
                <h5 className="card-title">{play.title}</h5>
                <p className="card-text">{play.desc}</p>
              </div>
              <div className="card-footer text-muted">{play.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
