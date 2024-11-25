const admin = require('firebase-admin');
const FIREBASE_KEY = require('./firestore-key.json')

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_KEY)
});

const db = admin.firestore()

module.exports = db;