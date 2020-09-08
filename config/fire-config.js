import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCdBd3WiuILeU-mypD7amdDBG5-dQS8eng",
    authDomain: "nextjs-auth-b8315.firebaseapp.com",
    databaseURL: "https://nextjs-auth-b8315.firebaseio.com",
    projectId: "nextjs-auth-b8315",
    storageBucket: "nextjs-auth-b8315.appspot.com",
    messagingSenderId: "172531932750",
    appId: "1:172531932750:web:280e6db1aa6e464cb62d1f",
    measurementId: "G-F2NFKCLXFX"
  };
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;