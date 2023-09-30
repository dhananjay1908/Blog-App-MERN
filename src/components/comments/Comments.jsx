import React from 'react'
import styles from "./comments.module.css"
import p1 from "../../Images/p1.jpeg"

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {
        status === "authenticated" ? (
          <div className={styles.commentInput}>
            <textarea placeholder="write a comment..." className={styles.input}></textarea>
            <button className={styles.button}>Send</button>
          </div>
        ) :
          <a href="/login"> Login to write a comment! </a>
      }
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img src={p1} alt='' className={styles.image}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>18.09.2023</span>
            </div>
          </div>
          <p className={styles.dec}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos voluptas veniam possimus repudiandae cumque.</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
