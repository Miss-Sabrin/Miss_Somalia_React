import React from 'react'
import styles from "./header.module.scss"

const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <ul>
                <li>
                    <a href="" className={styles.logo}>MissSomalia</a>
                </li>
                <li>
                    <a href="">All competiters</a>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header