import React from 'react'
import styles from './Alert.module.css'

export const Alert = ({message}) => {
  return (
    <div className={styles.alertContainer}>
        <span> {message} </span>
    </div>
  )
}
