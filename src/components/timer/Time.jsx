import React from 'react'
import styles from "./Timer.module.scss"
const Time = ({days,minutes,seconds,hours}) => {
  return (
       
   <div className={styles.countdown}>
   <h1>Vouting ENDS IN</h1>
   <div className={styles.time}>
 <div className={styles.digit_text}>
     <span className={styles.digit}>{days}:</span>
     <span className={styles.text}>Days</span>
        </div>
            <div className={styles.digit_text}>
     <span className={styles.digit}>{hours}:</span>
     <span className={styles.text}>Hours</span>
     </div>
  <div className={styles.digit_text}>
  <span className={styles.digit}>{minutes}:</span>
  <span className={styles.text}>minutes</span>
  </div>
  <div className={styles.digit_text}>
  <span className={styles.digit}>{seconds}:</span>
  <span className={styles.text}>seconds</span>
  </div>
        </div>
    </div>
  )
}

export default Time