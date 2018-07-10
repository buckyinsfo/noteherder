// Copy this file to base.js and add your app details.

import firebase from 'firebase/app'
import  'firebase/database'
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
  
 const app = firebase.initializeApp(config);
 const db = firebase.database(app)

 export default Rebase.createClass(db)