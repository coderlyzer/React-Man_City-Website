import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import { cityDb } from './temp/m-city-export'

var firebaseConfig = {
  apiKey: 'AIzaSyAcI6GIUg1K2LNdV-6FBV_ecMNXtcrCvmk',
  authDomain: 'mcity-753ba.firebaseapp.com',
  projectId: 'mcity-753ba',
  storageBucket: 'mcity-753ba.appspot.com',
  messagingSenderId: '879494237579',
  appId: '1:879494237579:web:5adb0b0495ca19a659738e',
  measurementId: 'G-YDE08CFR3C',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const DB = firebase.firestore()
const matchesCollection = DB.collection('matches')
const playersCollection = DB.collection('players')
const positionsCollection = DB.collection('positions')
const promotionsCollection = DB.collection('promotions')
const teamsCollection = DB.collection('teams')

// cityDb.matches.forEach((item) => {
//   matchesCollection.add(item)
// })

// cityDb.players.forEach((item) => {
//   playersCollection.add(item)
// })

// cityDb.positions.forEach((item) => {
//   positionsCollection.add(item)
// })

// cityDb.promotions.forEach((item) => {
//   promotionsCollection.add(item)
// })

// cityDb.teams.forEach((item) => {
//   teamsCollection.add(item)
// })

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
}
