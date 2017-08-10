import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
	apiKey: 'AIzaSyCex-hz3fGBVTqlW5ZzcKT25PRjiGFjzDo',
	authDomain: 'przm-public.firebaseapp.com',
	databaseURL: 'https://przm-public.firebaseio.com',
	projectId: 'przm-public',
	storageBucket: 'przm-public.appspot.com',
	messagingSenderId: '1049843557333'
})

export const twitterProvider = new Firebase.auth.TwitterAuthProvider()
export const db = firebaseApp.database()
export const auth = firebaseApp.auth()
