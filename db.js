import firebase from "firebase/app";
import "firebase/database";

const config ={
    apiKey: "AIzaSyDaUb3vy8NMN4Pxe2s3XRSkCaUynaeUH_A",
    authDomain: "vue-chat-app-4f43e.firebaseapp.com",
    projectId: "vue-chat-app-4f43e",
    storageBucket: "vue-chat-app-4f43e.appspot.com",
    messagingSenderId: "648838133069",
    appId: "1:648838133069:web:ede20dc1607d3503463304",
    measurementId: "G-X3G8PH4JBQ"
}

const db = firebase.initializeApp(config);
export default db;
