import React from "react";
import styles from "./Features.module.scss";

const Features = ({icon, txt}) => {
  return (
    <div className={styles.categoryCard}>
      <span className={`${styles.icon}`}>{icon}</span>
      <span className={styles.text}>{txt}</span>
    </div>
  );
};

export default Features;
