import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAfRdKDK_8oKGYpSrWaTkmmtyxSlHK-p_s",
    authDomain: "auth-cda59.firebaseapp.com",
    projectId: "auth-cda59",
    storageBucket: "auth-cda59.appspot.com",
    messagingSenderId: "525273904678",
    appId: "1:525273904678:web:205129d89077b56f4258e7",
    measurementId: "G-VDF2Z5727R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {
    auth,
    provider,
}