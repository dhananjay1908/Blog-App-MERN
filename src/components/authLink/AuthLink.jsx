import React, { useContext, useState } from 'react'
import styles from "./authlink.module.css"
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const AuthLink = () => {
  const {user, setUser} = useContext(AuthContext);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const handleSignOut = () => {
    setUser(null);
    navigate("/login")
  }

  return (
    <>
      {
        user===null ? <a href="/login" className={styles.link}>Login</a> :
          <>
            <a href="/write" className={styles.link}>Create</a>
            <span className={styles.link} onClick={handleSignOut}>Logout</span>
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
            user===null ? <a href="/login">Login</a> :
              <>
                <a href="/write">Create</a>
                <span onClick={handleSignOut}>Logout</span>
              </>
          }
        </div>
      )}
    </>
  )
}

export default AuthLink
