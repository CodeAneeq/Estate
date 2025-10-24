import React from 'react'
import styles from './btns.module.scss'

const PrimaryBtn = (props) => {
  return (
    <button style={props.style} className={`${styles.btn} ${props.className}`} onClick={props.onClick}>{props.txt}</button>
  )
}

export default PrimaryBtn