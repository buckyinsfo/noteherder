// Copy this file to base.js and add your app details.

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOIMAIN",
    databaseURL: "YOUR DB URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGE SENDER ID"
  };
  
  const app = firebase.initializeApp(config)
  const db = firebase.database(app)
 
  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = app.auth()
 
  export default Rebase.createClass(db)