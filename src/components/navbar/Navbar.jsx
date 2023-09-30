import React from 'react'
import styles from "./navbar.module.css"
import AuthLink from '../authLink/AuthLink'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        DJblog
      </div>

      <ThemeToggle/>
      
      <div className={styles.links}>
        <a className={styles.link} href="/">Homepage</a>
        <a className={styles.link} href="/">Contact</a>
        <a className={styles.link} href="/">About</a>
        <AuthLink />
      </div>
    </div>
  )
}

export default Navbar
