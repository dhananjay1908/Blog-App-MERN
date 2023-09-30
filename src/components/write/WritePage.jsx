import React, { useState } from 'react'
import styles from "./writePage.module.css"
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import plus from "../../Images/plus.png"
import image from "../../Images/image.png"
import external from "../../Images/external.png"
import video from "../../Images/video.png"


const WritePage = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className={styles.container}>
      <input type='text' placeholder='Title...' className={styles.input} />
      <div className={styles.editor}>
        <div className={styles.buttonRow}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <img src={plus} alt="" />
          </button>
          {
            open && <div className={styles.add}>
              <button className={styles.addButton}>
                <img src={image} alt="" />
              </button>
              <button className={styles.addButton}>
                <img src={external} alt="" />
              </button>
              <button className={styles.addButton}>
                <img src={video} alt="" />
              </button>
            </div>
          }
        </div>

        <ReactQuill
          theme='bubble'
          value={value}
          placeholder='Tell your story...'
          onChange={setValue}
          className={styles.textArea} />

          <button className={styles.publish}>Publish</button>
      </div>
    </div>
  )
}

export default WritePage
