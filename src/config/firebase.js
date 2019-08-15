import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyCDcw-09Bt2cyI1mw9s5CkW0mpt9VHiIhQ",
   authDomain: "reminders-firebase.firebaseapp.com",
   databaseURL: "https://reminders-firebase.firebaseio.com",
   projectId: "reminders-firebase",
   storageBucket: "reminders-firebase.appspot.com",
   messagingSenderId: "30796280713",
   appId: "1:30796280713:web:5c28ec205a64e855"
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export {firestore}
