import React from 'react'
import styles from "./categoryList.module.css"
import food from "../../Images/food.png"
import coding from "../../Images/coding.png"
import culture from "../../Images/culture.png"
import style from "../../Images/style.png"
import travel from "../../Images/travel.png"
import fashion from "../../Images/culture.png"


const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <a className={`${styles.category} ${styles.style}`} href="/blog?cat=style" >
          <img className={styles.image} src={style} alt='' />
          Style
        </a>
        <a className={`${styles.category} ${styles.food}`} href="/blog?cat=food" >
          <img className={styles.image} src={food} alt='' />
          Food
        </a>
        <a className={`${styles.category} ${styles.travel}`} href="/blog?cat=travel" >
          <img className={styles.image} src={travel} alt='' />
          Travel
        </a>
        <a className={`${styles.category} ${styles.fashion}`} href="/blog?cat=fashion" >
          <img className={styles.image} src={fashion} alt='' />
          Fashion
        </a>
        <a className={`${styles.category} ${styles.culture}`} href="/blog?cat=culture" >
          <img className={styles.image} src={culture} alt='' />
          Culture
        </a>
        <a className={`${styles.category} ${styles.coding}`} href="/blog?cat=coding" >
          <img className={styles.image} src={coding} alt='' />
          Coding
        </a>
      </div>
    </div>
  )
}

export default CategoryList
