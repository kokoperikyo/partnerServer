import Vue from "vue";
import {
  firestorePlugin
} from "vuefire";
import firebase from "@firebase/app";
import "@firebase/firestore";

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpym3Fearz45FR8oN6z5y79XX-P9uQkxA",
  authDomain: "devpartnertimer.firebaseapp.com",
  databaseURL: "https://devpartnertimer.firebaseio.com",
  projectId: "devpartnertimer",
  storageBucket: "devpartnertimer.appspot.com",
  messagingSenderId: "973728853399",
  appId: "1:973728853399:web:587e04861db13491baa8d2",
  measurementId: "G-CJ2KVL3LYW"
});

console.log(firebaseApp);

export const db = firebaseApp.firestore();