import React from 'react'
import styles from "./singlePage.module.css"
import p1 from "../../Images/p1.jpeg"
import travel from "../../Images/travel.png"
import Comments from '../comments/Comments'
import Menu from '../menu/Menu'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postDetails}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <img src={p1} alt='' className={styles.avatar}/>
            </div>
            <div className={styles.authorDetails}>
              <span className={styles.authorName}>John Doe</span>
              <span className={styles.date}>16.09.2023</span>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img src={travel} alt='' className={styles.image}/>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint obcaecati earum molestiae eligendi sit tempore delectus exercitationem, eveniet quas, saepe in sequi libero quaerat. Quaerat voluptates, impedit, distinctio omnis earum praesentium molestias laborum suscipit voluptate eos commodi culpa totam tempora officia iste reiciendis veniam laudantium aliquam facere? Adipisci, aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint obcaecati earum molestiae eligendi sit tempore delectus exercitationem, eveniet quas, saepe in sequi libero quaerat. Quaerat voluptates, impedit, distinctio omnis earum praesentium molestias laborum suscipit voluptate eos commodi culpa totam tempora officia iste reiciendis veniam laudantium aliquam facere? Adipisci, aliquid.</p>
          </div>
          <Comments/>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage
