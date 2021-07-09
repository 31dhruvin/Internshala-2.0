import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCB8V_Lo3l2KlC1zNTlc0sbnClXi3L8YHU",
    authDomain: "intern-1d142.firebaseapp.com",
    projectId: "intern-1d142",
    storageBucket: "intern-1d142.appspot.com",
    messagingSenderId: "1034405651145",
    appId: "1:1034405651145:web:cc83eca23b0ad2c05ca318",
    measurementId: "G-L6H4LZJEHJ"
  };
  const fire =  firebase.initializeApp(firebaseConfig);
  const db = fire.firestore()

export {fire,db}; 
  