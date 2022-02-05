import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvwyC6o6qsdsbnVM9g9TKRga81evMuYo8",
  authDomain: "dg-devnotes.firebaseapp.com",
  projectId: "dg-devnotes",
  storageBucket: "dg-devnotes.appspot.com",
  messagingSenderId: "166970446546",
  appId: "1:166970446546:web:f5f815987129443b6a930b",
  measurementId: "G-2LJFKFPLW0",
};

const app = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const firestore = firebase.firestore(app);
