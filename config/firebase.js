const admin = require('firebase-admin');

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_KEY)),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.firestore()

module.exports = db;