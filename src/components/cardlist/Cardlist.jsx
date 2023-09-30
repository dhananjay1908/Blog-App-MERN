import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from '../pagination/Pagination'
import style from "../../Images/style.png"
import culture from "../../Images/culture.png"

const Cardlist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={style} className={styles.image} alt='' />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
              <span className={styles.date}>16.09.2023 - </span>
              <span className={styles.category}>Fashion</span>
            </div>
            <h2 className={styles.cardTitle}>Card Title</h2>
            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero labore dolorum similique quae nulla, incidunt error fugit consequuntur repellendus sequi natus aperiam minima adipisci culpa. </p>
            <a className={styles.readMore} href="/blog">Read More</a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={culture} className={styles.image} alt='' />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
              <span className={styles.date}>16.09.2023 - </span>
              <span className={styles.category}>Fashion</span>
            </div>
            <h2 className={styles.cardTitle}>Card Title</h2>
            <p className={styles.cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero labore dolorum similique quae nulla, incidunt error fugit consequuntur repellendus sequi natus aperiam minima adipisci culpa. </p>
            <a className={styles.readMore} href="/blog">Read More</a>
          </div>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}

export default Cardlist
