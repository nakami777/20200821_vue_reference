import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyB_sNOEFciub8HZ7kZ1e_VAN6hMmZmCB18',
  authDomain: 'nekobooksweb.firebaseapp.com',
  databaseURL: 'https://nekobooksweb.firebaseio.com',
  projectId: 'nekobooksweb',
  storageBucket: 'nekobooksweb.appspot.com',
  messagingSenderId: '680926590407'
}
firebase.initializeApp(config)

export default firebase
