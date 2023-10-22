import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAoOcG-gQ4Yu1-32bfHXvh6u3PL_xLr-kw",
    authDomain: "chatroom-99d26.firebaseapp.com",
    projectId: "chatroom-99d26",
    storageBucket: "chatroom-99d26.appspot.com",
    messagingSenderId: "1027400834634",
    appId: "1:1027400834634:web:f72c4b42c70769864250b3"
  }).auth();