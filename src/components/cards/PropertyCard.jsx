import React from 'react'
import styles from './PropertyCard.module.scss'
import pic from '../../assets/pic1.png'
import { IoIosBed } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

const PropertyCard = () => {
  return (
    <div className={`${styles.property_card}`}>
      <figure>
        <img src={pic} alt="" />
      </figure>
      <div className={`${styles.property_details}`}>
        <div className='container'>
        <div className={`${styles.name_div}`}>
          <h2>$4200</h2>
        <h3>Red Carpet Real Estate</h3>
        <h4><span><CiLocationOn/></span>  210 Zirak Road, Canada</h4>
        </div>
        <div className={`${styles.categories}`}>
          <p><span><IoIosBed/>: </span> <span>2</span></p>
          <p><span><FaBath/>: </span> <span>2</span></p>
          <p><span><MdSquareFoot/>: </span> <span>2</span></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard