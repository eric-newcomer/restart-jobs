import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBI2_sZxcAStc5QKwOQYyFRQ4M9X9xsCOQ",
   authDomain: "restart-jobs.firebaseapp.com",
   projectId: "restart-jobs",
   storageBucket: "restart-jobs.appspot.com",
   messagingSenderId: "300825365375",
   appId: "1:300825365375:web:590985ab6a1238b36ea84a",
   measurementId: "G-L7XJS4S5NX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };