import React from 'react'
import styles from "./menu.module.css"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Popular</h1>

      <div className={styles.posts}>

        <div className={styles.post}>
          <div className={styles.category}>
            Travel
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto?
          </div>
          <div className={styles.details}>
            <span className={styles.author}>John Doe - </span>
            <span className={styles.date}>16.09.2023</span>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.category}>
            Travel
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto?
          </div>
          <div className={styles.details}>
            <span className={styles.author}>John Doe - </span>
            <span className={styles.date}>16.09.2023</span>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.category}>
            Travel
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto?
          </div>
          <div className={styles.details}>
            <span className={styles.author}>John Doe - </span>
            <span className={styles.date}>16.09.2023</span>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.category}>
            Travel
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto?
          </div>
          <div className={styles.details}>
            <span className={styles.author}>John Doe - </span>
            <span className={styles.date}>16.09.2023</span>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.category}>
            Travel
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto?
          </div>
          <div className={styles.details}>
            <span className={styles.author}>John Doe - </span>
            <span className={styles.date}>16.09.2023</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Menu
