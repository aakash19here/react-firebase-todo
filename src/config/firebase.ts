import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwp_8jwMHJe_UWUXOC67Hw0XNE3qSY6P8",
  authDomain: "todo-app-dc1dd.firebaseapp.com",
  projectId: "todo-app-dc1dd",
  storageBucket: "todo-app-dc1dd.appspot.com",
  messagingSenderId: "329282454954",
  appId: "1:329282454954:web:ed3cc95bb8aea4d10c57d3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;