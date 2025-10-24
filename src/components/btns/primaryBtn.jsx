import React from 'react'
import styles from './btns.module.scss'

const PrimaryBtn = (props) => {
  return (
    // <div className={`${styles.btnDiv}`}>
    <button style={props.style} className={`${styles.btn} ${props.className}`} onClick={props.onClick}>{props.txt}</button>
  // </div>
  )
}

export default PrimaryBtn