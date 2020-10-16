import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi42yaF2j_pERNFBXrI3bL5bAjeY6u3Us",
  authDomain: "dictionary-app-online.firebaseapp.com",
  databaseURL: "https://dictionary-app-online.firebaseio.com",
  projectId: "dictionary-app-online",
  storageBucket: "dictionary-app-online.appspot.com",
  messagingSenderId: "354390183068",
  appId: "1:354390183068:web:1cf8e59d7722d9240d7159",
  measurementId: "G-3E53G13XZP"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();