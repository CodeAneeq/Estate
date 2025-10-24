import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ label, type, placeholder, style, className }) => {
  return (
    <div className={`${styles.inputField} ${className}`}>
      <label>{label}</label>
      <input style={style} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
