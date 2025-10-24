import React from 'react'
import styles from './PropertyPage.module.scss'
import BasicLayout from '../../components/layout/BasicLayout'
import PrimaryBtn from '../../components/btns/primaryBtn'
import save from '../../assets/save.png'
import Features from '../../components/cards/Feature'
import { BsHouse, BsHouseAdd } from 'react-icons/bs'

const PropertyPage = () => {
  return (
    <BasicLayout>

    <div className={`${styles.PropertyPage_container}`}>
        <figure>
            <img src={save} alt="" />
        </figure>
        <div className={`${styles.details}`}>
            <div className={`${styles.one}`}>
                <h3>$ 4000</h3>
                <p>River Park Estate, Lugbe, Airport Road, Lugbe, NigeriaShare</p>
                <hr />
            </div>
            <div className={`${styles.one}`}>
                <h3>Key Features</h3>
                <div className={`${styles.features_div}`}>
                  <Features icon={<BsHouseAdd/>} txt={'Single Family House'} />
                  <Features icon={<BsHouseAdd/>} txt={'Single Family House'} />
                  <Features icon={<BsHouseAdd/>} txt={'Single Family House'} />
                  <Features icon={<BsHouseAdd/>} txt={'Single Family House'} />
                  <Features icon={<BsHouseAdd/>} txt={'Single Family House'} />
                  <Features icon={<BsHouseAdd/>} txt={'Single Family House'} />
                </div>
            </div>
            <div className={`${styles.one}`}>
                <h3>What's Special</h3>
                <p>Luxury affordable house for your family needs.</p>
            </div>
            <div className={`${styles.one}`}>
                <h3>Contact Us</h3>
                <PrimaryBtn className={styles.btnn} txt={"Contact Us"}/>
            </div>
        </div>
    </div>
    </BasicLayout>
  )
}

export default PropertyPage