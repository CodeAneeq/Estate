import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ image, title, price, location }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
