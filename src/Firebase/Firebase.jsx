import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCkinccNEoOisvASwKkr16qz1G7y_Uua4k",
    authDomain: "mail-box-client-ccb2c.firebaseapp.com",
    projectId: "mail-box-client-ccb2c",
    storageBucket: "mail-box-client-ccb2c.appspot.com",
    messagingSenderId: "291930407481",
    appId: "1:291930407481:web:df7e64dd107d9e401843e8"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
