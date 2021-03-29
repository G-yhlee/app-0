import firebase from 'firebase/app';
import 'firebase/firestore';



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAgdKDJPQ_VAifyyU3J4uINmQtShz8yN_U",
    authDomain: "electron-chat-c9171.firebaseapp.com",
    projectId: "electron-chat-c9171",
    storageBucket: "electron-chat-c9171.appspot.com",
    messagingSenderId: "179127251861",
    appId: "1:179127251861:web:ff6ed98b162db5729f3c9c",
    measurementId: "G-V4550GWHYY"
  };
  
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig).firestore();
 
//   firebase.analytics();