// UpcomingEvents.jsx
import React from "react";
import styles from "./UpcomingEvents.module.css";

const UpcomingEvents = () => {
  const events = [
    { title: "Drama Fest 2025", date: "August 15" },
    { title: "Auditions for Hamlet", date: "September 10" }
  ];

  return (
    <section className={styles.events}>
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <ul className="list-group">
        {events.map((event, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            <span>{event.title}</span>
            <span className="badge bg-primary">{event.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
