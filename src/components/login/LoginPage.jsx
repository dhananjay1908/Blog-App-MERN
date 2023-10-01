import React, { useContext} from 'react'
import styles from "./login.module.css"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const {setUser} = useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Login</h1>
        <div className={styles.socialButton}>
          <GoogleLogin
            onSuccess={credentialResponse => {
              const res = jwt_decode(credentialResponse.credential)
              console.log(res);
              setUser(res);
              navigate("/")
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        {/* <div className={styles.socialButton}>Sign in with Github</div> */}
      </div>
    </div>
  )
}

export default LoginPage
