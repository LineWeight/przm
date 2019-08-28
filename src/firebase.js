import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCex-hz3fGBVTqlW5ZzcKT25PRjiGFjzDo",
    authDomain: "przm-public.firebaseapp.com",
    databaseURL: "https://przm-public.firebaseio.com",
    projectId: "przm-public",
    storageBucket: "przm-public.appspot.com",
    messagingSenderId: "1049843557333",
    appId: "1:1049843557333:web:582b220985bf199b"
  })

export const db = firebase.database()
export const auth = firebase.auth()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()
