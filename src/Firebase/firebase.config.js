import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBYpsK8dbsE6v0-5Y1zZBSMdAPVTm-5L0A",
    authDomain: "email-auth-22802.firebaseapp.com",
    projectId: "email-auth-22802",
    storageBucket: "email-auth-22802.appspot.com",
    messagingSenderId: "387138909765",
    appId: "1:387138909765:web:f3f9ba695038826292552c"
  };

  const app = initializeApp(config);
  const auth = getAuth(app);

  export default auth;