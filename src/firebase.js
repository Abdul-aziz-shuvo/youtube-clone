import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDsPB69-es-MEBKPc-iuDWqcxh6NG4fbb4",
    authDomain: "shuvo-b92b0.firebaseapp.com",
    projectId: "shuvo-b92b0",
    storageBucket: "shuvo-b92b0.appspot.com",
    messagingSenderId: "549825051326",
    appId: "1:549825051326:web:1bdab355d40871276a3cef"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth();