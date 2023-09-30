import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footnote}>
        <div className={styles.heading}>
          {/* <Image src="/travel.png" alt="" className={styles.img} width={30} height={30}/> */}
          <h2 className={styles.title}>DJblog</h2>
        </div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus voluptatum odit cum repudiandae eius dignissimos laboriosam explicabo repellat perferendis!
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.pageLinks}>
          <h3>Links</h3>
          <a className={styles.link} href="/">Homepage</a>
          <a className={styles.link} href="/">Contact</a>
          <a className={styles.link} href="/">About</a>
        </div>
        <div className={styles.social}>
          <h3>Socials</h3>
          <a className={styles.link} href="/">Facebook</a>
          <a className={styles.link} href="/">Instagram</a>
          <a className={styles.link} href="/">Twitter</a>
        </div>
        <div className={styles.tags}>
          <h3>Tags</h3>
          <a className={styles.link} href="/">Style</a>
          <a className={styles.link} href="/">Travel</a>
          <a className={styles.link} href="/">Food</a>
          <a className={styles.link} href="/">Coding</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
