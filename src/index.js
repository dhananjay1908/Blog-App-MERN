import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const client_ID = process.env.GOOGLE_CLIENT;
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <GoogleOAuthProvider clientId="897606106772-fc8lt2ms1eg3snqh14tndunl6j0rdnen.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

