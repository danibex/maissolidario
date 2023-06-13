import firebase from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
export const firebaseConfig = {
    apiKey: "AIzaSyA9jbyGzfA2EUnXXzw3ug-GOCoPg8iVmBI",
    authDomain: "mais-sol.firebaseapp.com",
    projectId: "mais-sol",
    storageBucket: "mais-sol.appspot.com",
    messagingSenderId: "235631388184",
    appId: "1:235631388184:web:0b28b511711f2867b1856d",
    measurementId: "G-E2PJ1RN193"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();
export { auth, db, now, storage };
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');