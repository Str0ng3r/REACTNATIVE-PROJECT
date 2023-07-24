// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUWzvIr8FS-t9C6CsoySBw-62FLtW2WXY",
  authDomain: "native-app-55326.firebaseapp.com",
  projectId: "native-app-55326",
  storageBucket: "native-app-55326.appspot.com",
  messagingSenderId: "944122493250",
  appId: "1:944122493250:web:ecea9f647cd4ba7046b0db",
  measurementId: "G-YT77ZSP855"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase