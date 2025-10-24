import React from "react";
import styles from "./ContactForm.module.scss";
import InputField from "../input/InputField";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>
        <strong>Contact</strong> With Us
      </h2>
      <p className={styles.subtitle}>
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <InputField label="Your Name" type="text" placeholder="Your Name" className={styles.input} />
          <InputField label="Your Email" type="email" placeholder="Your Email" className={styles.input} />
        </div>
        <div className={styles.textareaGroup}>
          <label>Message</label>
          <textarea className={styles.textarea} placeholder="Message"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
