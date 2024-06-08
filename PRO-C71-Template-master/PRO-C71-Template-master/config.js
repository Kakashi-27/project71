import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyARW73d47H8IsUMhlOn837O-PFFRb2_Xqk",
    authDomain: "class-71-29de0.firebaseapp.com",
    databaseURL: "https://class-71-29de0-default-rtdb.firebaseio.com",
    projectId: "class-71-29de0",
    storageBucket: "class-71-29de0.appspot.com",
    messagingSenderId: "1003338543026",
    appId: "1:1003338543026:web:7500e20bcc6c701b6e7eab"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
