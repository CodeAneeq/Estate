import React, { useContext } from "react";
import styles from "./navbar.module.scss";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import PrimaryBtn from "../btns/primaryBtn";

const Navbar = () => {

  return (
    <div className="container">
      <div className={`${styles.navbar_container}`}>

        {/* child 1 */}
        <figure>
          <img src={logo} alt="" />
        </figure>

        <div className={styles.hamburger}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        
        {/* child 2 */}
        <ul className={`${styles.list_container}`}>
          <Link to='/' className={styles.li}>
          <li className={`${styles.li}`}>Home</li>
          </Link>
          <Link to='/properties' className={styles.li}>
          <li className={`${styles.li}`}>Properties</li>
          </Link>
          <li className={`${styles.li}`}>About</li>
          <Link to='/contact' className={styles.li}>
          <li className={`${styles.li}`}>Contact</li>
          </Link>
          
        </ul>

      {/* child 3 */}
      <div className={`${styles.btn_div}`}>
        <PrimaryBtn txt={"Sign Up"}/>
      </div>

      </div>
    </div>
  );
};

export default Navbar;