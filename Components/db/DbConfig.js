import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBN0_cWZog746XQiSrGUijvjbNPNewfmN4",
    authDomain: "loginherk.firebaseapp.com",
    databaseURL: "https://loginherk.firebaseio.com",
    projectId: "loginherk",
    storageBucket: "loginherk.appspot.com",
    messagingSenderId: "363493939543"

}
export const firebaseApp = firebase.initializeApp(firebaseConfig);