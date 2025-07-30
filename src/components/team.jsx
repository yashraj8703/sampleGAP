import React, { useState } from "react";
import styles from "./team.module.css";

const Team = () => {
  const members = [
    { name: "Aarav Sharma", role: "President", image: "https://picsum.photos/id/1005/400/400" },
    { name: "Meera Kapoor", role: "Vice President", image: "https://picsum.photos/id/1011/400/400" },
    { name: "Yash Raj", role: "Secretary", image: "https://picsum.photos/id/1012/400/400" },
    { name: "Riya Sen", role: "Creative Director", image: "https://picsum.photos/id/1013/400/400" },
    { name: "Kabir Verma", role: "Treasurer", image: "https://picsum.photos/id/1014/400/400" },
    { name: "Ananya Iyer", role: "Event Coordinator", image: "https://picsum.photos/id/1015/400/400" },
    { name: "Shaan Mehta", role: "Stage Manager", image: "https://picsum.photos/id/1016/400/400" },
    { name: "Pooja Rao", role: "Public Relations", image: "https://picsum.photos/id/1018/400/400" },
    { name: "Raj Malhotra", role: "Actor", image: "https://picsum.photos/id/1020/400/400" },
    { name: "Neha Patel", role: "Actor", image: "https://picsum.photos/id/1024/400/400" },
  ];

  // Show 4 members initially (1 row), then load 4 more each click
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount((prev) => prev + 4); // show one more row
  };

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>Meet Our Team</h2>
      <div className="container">
        <div className="row">
          {members.slice(0, visibleCount).map((member, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className={`card ${styles.card}`}>
                <img
                  src={member.image}
                  className={`card-img-top ${styles.cardImg}`}
                  alt={member.name}
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h5 className="card-title">{member.name}</h5>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show button only if there are hidden members */}
        {visibleCount < members.length && (
          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={showMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
