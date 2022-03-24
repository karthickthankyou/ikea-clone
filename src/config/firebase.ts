import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCY_iViY7yrfZu7mFcL-mV08RuHf9cZw-8',
  authDomain: 'ikea-clone-9caba.firebaseapp.com',
  projectId: 'ikea-clone-9caba',
  storageBucket: 'ikea-clone-9caba.appspot.com',
  messagingSenderId: '332882600865',
  appId: '1:332882600865:web:237d26727100a2f2eae1e0',
  measurementId: 'G-YZ8Y1VK2W7',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

export const collections = {
  // Example
  // USERS: 'users',
}
