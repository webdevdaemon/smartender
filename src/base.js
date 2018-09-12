import Rebase from 're-base'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY, 
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN, 
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE, 
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, 
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID, 
}

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/account',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const ui = new firebaseui.auth.AuthUI(firebase.auth())

export {base}
export {uiConfig}
export {ui}