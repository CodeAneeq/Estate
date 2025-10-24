import React from 'react'
import BasicLayout from '../../components/layout/BasicLayout'
import styles from './properties.module.scss'
import PropertyCard from '../../components/cards/PropertyCard'

const Properties = () => {
  return (
    <BasicLayout>
      <div className={`${styles.properties_page}`}>
        <div className={`${styles.details}`}>
        <h2>Availaible Properties Listed</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.
        </p>
        </div>
        <div className={`${styles.cards}`}>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
        </div>
      </div>
    </BasicLayout>
  )
}

export default Properties