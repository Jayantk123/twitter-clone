import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCnE930a867RkvpHCDeo82z5U6fzy2LqB4",
    authDomain: "twitter-clone-eed4f.firebaseapp.com",
    projectId: "twitter-clone-eed4f",
    storageBucket: "twitter-clone-eed4f.appspot.com",
    messagingSenderId: "462425311183",
    appId: "1:462425311183:web:ffe205e57a6f3db42cf4ba"
  };


 const firebaseApp = firebase.initializeApp(firebaseConfig);
/*export db*/
 const db = firebase.firestore();


 export default db;