import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnjnZuzbpblEUGFtA7KBLW_5nZCHypD8g",
    authDomain: "shuvo-yt-clone.firebaseapp.com",
    projectId: "shuvo-yt-clone",
    storageBucket: "shuvo-yt-clone.appspot.com",
    messagingSenderId: "702644085700",
    appId: "1:702644085700:web:bb9f1699a4b1d1da233a91"
};

firebase.initializeApp(firebaseConfig)
export default firebase.auth();