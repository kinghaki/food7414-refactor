import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB_J7VRdZ_BhzXdZtpD1OnrLaeclutcOtE',
  authDomain: 'superb-memory-289108.firebaseapp.com',
  // databaseURL必須要在firebase授權網域
  databaseURL: 'localhost',
  projectId: 'superb-memory-289108',
  storageBucket: 'superb-memory-289108.appspot.com',
  messagingSenderId: '554281871271',
  appId: '1:554281871271:web:a8ec0958e3798dc0eb7882',
  measurementId: 'G-L25FTQZC6F'
}
// 網路查的如果已經載過1次會失敗，多次載入會失敗，因為導出都會讀取
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase, firebaseConfig }
