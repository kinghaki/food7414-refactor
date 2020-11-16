import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: 'nuxtfoodproject.firebaseapp.com',
  databaseURL: 'https://nuxtfoodproject.firebaseio.com',
  projectId: 'nuxtfoodproject',
  storageBucket: 'nuxtfoodproject.appspot.com',
  messagingSenderId: '946444134045',
  appId: '1:946444134045:web:00fde241a4e088e1979674',
  measurementId: 'G-4LZK9319PB'
}
// 網路查的如果已經載過1次會失敗，多次載入會失敗，因為導出都會讀取
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase, firebaseConfig }
