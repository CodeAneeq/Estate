// import React from "react";
// import styles from "./ContactForm.module.scss";
// import InputField from "../input/InputField";
// import PrimaryBtn from "../btns/primaryBtn";

// const ContactForm = () => {
//   return (
//     <div className={styles.contactSection}>
//       <h2 className={styles.heading}>
//         <span>Contact </span>With Us
//       </h2>
//       <p className={styles.subheading}>
//         Ready to Make a Move? Let’s Build Your Future Together
//       </p>
      
//       <form className={styles.form}>
//         <div className={styles.inputGroup}>
//           <InputField label="Your Name" type="text" placeholder="Your Name" />
//           <InputField label="Your Email" type="email" placeholder="Your Email" />
//         </div>
        
//         <div className={styles.textareaGroup}>
//           <label style={{marginBottom: '10px'}}>Message</label>
//           <textarea placeholder="Message"></textarea>
//         </div>

//         <PrimaryBtn style={{marginTop: '20px', marginLeft: '20px', backgroundColor: '#2563EB', width: '130px', height: '40px', borderRadius: '5px', color: 'white'}} txt={"Submit"}/>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


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
