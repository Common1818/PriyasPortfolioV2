import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fbConfig = {
  apiKey: "AIzaSyCbcKVcReRW3hLHpWMIIASFgWdpPqmxA-w",
  authDomain: "priyabihaniportfolio.firebaseapp.com",
  databaseURL: "https://priyabihaniportfolio.firebaseio.com",
  projectId: "priyabihaniportfolio",
  storageBucket: "priyabihaniportfolio.appspot.com",
  messagingSenderId: "917634321272",
  appId: "1:917634321272:web:4298234ff70dc242f9568d",
  measurementId: "G-7GKS8W6QFE",
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
