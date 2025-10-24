import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg'
import InputField from '../input/InputField';
import PrimaryBtn from '../btns/primaryBtn';

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
        <div className={styles.footer}>
      <div className={styles.brand}>
        <img src={logo} alt="" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>
      <div className={styles.company}>
        <h3>Company</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h3>Subscribe to our newsletter</h3>
        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
        <div>
          {/* <div className={styles.InputField_div}> */}

        <InputField className={styles.input} style={{width: '160px', backgroundColor: '#1F2937', border: 'none'}} placeholder={"Enter Your Email"} type={'email'}/>
          {/* </div> */}
        <PrimaryBtn style={{backgroundColor: '#2563EB', width: '140px', height: '35px', borderRadius: '5px', color: 'white', marginBottom: '0px'}} txt={"Subscribe"}/>
        </div>
      </div>
      </div>
      <div className={`${styles.end}`}>

      <hr />
      <p>Copyright 2024 © CodeAneeq. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;