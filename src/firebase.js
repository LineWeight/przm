import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
	apiKey: 'AIzaSyA0SI2H3Lboh1B1e7hFqGKYo-TfxvH3bY0',
	authDomain: 'przm-staging.firebaseapp.com',
	databaseURL: 'https://przm-staging.firebaseio.com',
	projectId: 'przm-staging',
	storageBucket: 'przm-staging.appspot.com',
	messagingSenderId: '338355127780'
})

export const twitterProvider = new Firebase.auth.TwitterAuthProvider()
export const db = firebaseApp.database()
export const auth = firebaseApp.auth()
