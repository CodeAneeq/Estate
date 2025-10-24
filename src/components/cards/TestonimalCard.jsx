import React from "react";
import styles from "./TestimonialCard.module.scss";

const TestimonialCard = ({ image, name, designation, review }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.profileImage} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.designation}>{designation}</p>
      <div className={styles.stars}>★★★★★</div>
      <p className={styles.review}>{review}</p>
    </div>
  );
};

export default TestimonialCard;
