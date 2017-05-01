import firebase from 'firebase'
import C from './credentials/FirebaseConfig.json'

export default firebase.initializeApp(C)