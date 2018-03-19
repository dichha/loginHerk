import React from 'react';
import * as firebase from 'firebase';

// Initialize Firebase
// you can move this config to env variable or some place else safe.
const firebaseConfig = {
    apiKey: "AIzaSyBN0_cWZog746XQiSrGUijvjbNPNewfmN4",
    authDomain: "loginherk.firebaseapp.com",
    databaseURL: "https://loginherk.firebaseio.com",
    projectId: "loginherk",
    storageBucket: "loginherk.appspot.com",
    messagingSenderId: "363493939543"

}
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export function emailSignUp({email, password}, callback) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => callback(null, user))
    .catch((err) => callback(err, null))
}
export function emailSignIn({email, password}, callback) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then((user) => callback(null, user))
      .catch((err) => callback(err, null))
}

export function signout(done) {
    firebaseApp.auth().signOut().then(() => done()).catch((error) => done(error))
}