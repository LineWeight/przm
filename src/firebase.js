import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyDNBMEriYczu_2R4VZyI_gxcFAxrCvGEIM',
  authDomain: 'przm-b4311.firebaseapp.com',
  databaseURL: 'https://przm-b4311.firebaseio.com',
  projectId: 'przm-b4311',
  storageBucket: 'przm-b4311.appspot.com',
  messagingSenderId: '1072656352091'
})

export const twitterProvider = new Firebase.auth.TwitterAuthProvider()
export const db = firebaseApp.database()
export const auth = firebaseApp.auth()
