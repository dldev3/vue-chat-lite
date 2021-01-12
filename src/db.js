import firebase from 'firebase/app';
import "firebase/database";

const config = {
    apiKey: "AIzaSyA8Z4PMeGrLma1rX_7LU-azFyrjZxm3lfc",
    authDomain: "vue-chat-lite.firebaseapp.com",
    projectId: "vue-chat-lite",
    storageBucket: "vue-chat-lite.appspot.com",
    messagingSenderId: "543554671001",
    appId: "1:543554671001:web:53f76c84974505d8720308"
}

const db = firebase.initializeApp(config);

export default db;