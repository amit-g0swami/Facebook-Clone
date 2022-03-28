import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKmVhjTDuP8FRKc308OQIS4SmouEYbtuE",
  authDomain: "facebook-clone-610da.firebaseapp.com",
  databaseURL: "https://facebook-clone-610da-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-610da",
  storageBucket: "facebook-clone-610da.appspot.com",
  messagingSenderId: "888574990662",
  appId: "1:888574990662:web:df6d7d25c3d704d1576d47",
  measurementId: "G-VFLKYLPYPF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;