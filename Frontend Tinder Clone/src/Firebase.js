import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQsDh_aZfRBS0-faEjixAe_iSQFpV6ch0",
    authDomain: "tinder-clone-575fd.firebaseapp.com",
    databaseURL: "https://tinder-clone-575fd.firebaseio.com",
    projectId: "tinder-clone-575fd",
    storageBucket: "tinder-clone-575fd.appspot.com",
    messagingSenderId: "574600142962",
    appId: "1:574600142962:web:69a333f172cfd195a1e2eb",
    measurementId: "G-ZGVX4MT4WE",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);   
  const database =firebaseApp.firestore();

  export default database;

