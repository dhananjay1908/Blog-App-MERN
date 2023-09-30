import React, { useState } from 'react'
import styles from "./authlink.module.css"

const AuthLink = () => {
  const status = "notauthenticated"
  const [open, setOpen] = useState(false)
  return (
    <>
      {
        status === "notauthenticated" ? <a href="/login" className={styles.link}>Login</a> :
          <>
            <a href="/create" className={styles.link}>Create</a>
            <span className={styles.link}>Logout</span>
          </>
      }
      <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.menu} onClick={()=>setOpen(false)}>
          <a href="/">Homepage</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
          {
            status === "notauthenticated" ? <a href="/login">Login</a> :
              <>
                <a href="/create">Create</a>
                <span>Logout</span>
              </>
          }
        </div>
      )}
    </>
  )
}

export default AuthLink
