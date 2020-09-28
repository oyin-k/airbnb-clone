import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaxQjAyC3T1Dhbz2M6lL6f7kdL180it24",
  authDomain: "airbnb-clone-3a36f.firebaseapp.com",
  databaseURL: "https://airbnb-clone-3a36f.firebaseio.com",
  projectId: "airbnb-clone-3a36f",
  storageBucket: "airbnb-clone-3a36f.appspot.com",
  messagingSenderId: "105688659590",
  appId: "1:105688659590:web:5b595864f723cf068ec307",
  measurementId: "G-D1Y5NWZ8JT",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
