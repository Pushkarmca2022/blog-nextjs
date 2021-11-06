import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyB5i3vnAveIzGFBv5go9NARzT7IQF6P0KM",
  authDomain: "blood-b8043.firebaseapp.com",
  databaseURL: "https://blood-b8043-default-rtdb.firebaseio.com",
  projectId: "blood-b8043",
  storageBucket: "blood-b8043.appspot.com",
  messagingSenderId: "1053568277710",
  appId: "1:1053568277710:web:fb357fe3e736018928c49f",
  measurementId: "G-9TPC0R96F6"
  };
  
 



if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth,db,storage,serverTimestamp}


