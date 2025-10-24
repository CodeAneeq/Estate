import React from 'react'
import styles from './hero.module.scss'
import PrimaryBtn from '../btns/primaryBtn'
import Navbar from '../navbar/navbar'

const Hero = () => {
  return (
    <div className={`${styles.hero_container}`}>
        <h1>Explore homes that fit your dreams</h1>
        <div className={`${styles.btn_div}`}>
        <PrimaryBtn className={styles.btn} style={{ border: '1px solid white', color: 'white', borderRadius: '5px', height: '50px', width: '150px', background: 'transparent' }} txt="Properties" />

            <PrimaryBtn className={styles.btn} txt={"Contact"} style={{border: 'none', color: 'white', borderRadius: '5px', height: '50px', width: '150px', background: '#3B82F6' }}/>
        </div>
    </div>
  )
}

export default Hero