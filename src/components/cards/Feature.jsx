import React from "react";
import styles from "./Features.module.scss";
// import { Home } from "lucide-react"; // Using Lucide-react for the home icon

const Features = ({icon, txt}) => {
  return (
    <div className={styles.categoryCard}>
      <span className={`${styles.icon}`}>{icon}</span>
      <span className={styles.text}>{txt}</span>
    </div>
  );
};

export default Features;
