import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBsWKW5N6vTKXHbc_4YnIrUnHA7FP1cTFg',
  authDomain: 'ikea-2b553.firebaseapp.com',
  projectId: 'ikea-2b553',
  storageBucket: 'ikea-2b553.appspot.com',
  messagingSenderId: '135345661464',
  appId: '1:135345661464:web:4eeb1ae95515b0b393456d',
  measurementId: 'G-9X1RF66J41',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
